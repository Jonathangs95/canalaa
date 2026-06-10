import hmac
import json
import os
from functools import wraps
from pathlib import Path
from threading import Lock
from uuid import uuid4

from flask import Flask, jsonify, redirect, request, send_from_directory, session, url_for

try:
    import psycopg
    from psycopg.rows import dict_row
    from psycopg.types.json import Json
except ImportError:
    psycopg = None
    dict_row = None
    Json = None

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
REGISTROS_FILE = DATA_DIR / "registros.json"
REGISTROS_LOCK = Lock()
DATABASE_URL = os.environ.get("DATABASE_URL") or os.environ.get("POSTGRES_URL", "")

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "troque-esta-chave-em-producao")
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
)

ADMIN_USER = os.environ.get("APP_ADMIN_USER", "admin")
ADMIN_PASSWORD = os.environ.get("APP_ADMIN_PASSWORD", "adimin")
TEST_USER = os.environ.get("APP_TEST_USER", "teste")
TEST_PASSWORD = os.environ.get("APP_TEST_PASSWORD", "teste10")


USERS = {
    ADMIN_USER: {"password": ADMIN_PASSWORD, "role": "admin"},
    TEST_USER: {"password": TEST_PASSWORD, "role": "teste"},
}


def login_required(route_handler):
    @wraps(route_handler)
    def wrapped(*args, **kwargs):
        if not session.get("logged_in"):
            return redirect(url_for("login"))
        return route_handler(*args, **kwargs)

    return wrapped


def admin_required(route_handler):
    @wraps(route_handler)
    def wrapped(*args, **kwargs):
        if not session.get("logged_in"):
            return redirect(url_for("login"))
        if session.get("role") != "admin":
            return redirect(url_for("home"))
        return route_handler(*args, **kwargs)

    return wrapped


def ensure_data_file():
    DATA_DIR.mkdir(exist_ok=True)
    if not REGISTROS_FILE.exists():
        REGISTROS_FILE.write_text("[]", encoding="utf-8")


def read_registros():
    with REGISTROS_LOCK:
        ensure_data_file()
        try:
            return json.loads(REGISTROS_FILE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            return []


def write_registros(registros):
    with REGISTROS_LOCK:
        ensure_data_file()
        REGISTROS_FILE.write_text(
            json.dumps(registros, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )


def database_url():
    if not DATABASE_URL:
        return ""
    if "sslmode=" in DATABASE_URL:
        return DATABASE_URL
    separator = "&" if "?" in DATABASE_URL else "?"
    return f"{DATABASE_URL}{separator}sslmode=require"


def database_enabled():
    return bool(DATABASE_URL and psycopg)


def db_connection():
    return psycopg.connect(database_url(), row_factory=dict_row, autocommit=True)


def ensure_db_table():
    with db_connection() as conn:
        conn.execute(
            """
            create table if not exists registros (
              id uuid primary key,
              created_at timestamptz not null default now(),
              usuario text,
              perfil_acesso text,
              data timestamptz,
              motivo text,
              perfil text,
              produto_atual text,
              oferta jsonb not null default '[]'::jsonb,
              resultado text,
              pos_motivo text,
              sinais jsonb not null default '[]'::jsonb
            )
            """
        )


def row_to_registro(row):
    return {
        "id": str(row.get("id")),
        "createdAt": row.get("created_at").isoformat() if row.get("created_at") else None,
        "usuario": row.get("usuario"),
        "perfilAcesso": row.get("perfil_acesso"),
        "data": row.get("data").isoformat() if row.get("data") else None,
        "motivo": row.get("motivo"),
        "perfil": row.get("perfil"),
        "produtoAtual": row.get("produto_atual"),
        "oferta": row.get("oferta") or [],
        "resultado": row.get("resultado"),
        "posMotivo": row.get("pos_motivo"),
        "sinais": row.get("sinais") or [],
    }


def save_registro(registro):
    if not database_enabled():
        registros_salvos = read_registros()
        registros_salvos.append(registro)
        write_registros(registros_salvos)
        return registro

    ensure_db_table()
    with db_connection() as conn:
        row = conn.execute(
            """
            insert into registros (
              id, usuario, perfil_acesso, data, motivo, perfil, produto_atual,
              oferta, resultado, pos_motivo, sinais
            )
            values (
              %(id)s, %(usuario)s, %(perfil_acesso)s, %(data)s, %(motivo)s,
              %(perfil)s, %(produto_atual)s, %(oferta)s, %(resultado)s,
              %(pos_motivo)s, %(sinais)s
            )
            returning *
            """,
            {
                "id": registro["id"],
                "usuario": registro["usuario"],
                "perfil_acesso": registro["perfilAcesso"],
                "data": registro["data"],
                "motivo": registro["motivo"],
                "perfil": registro["perfil"],
                "produto_atual": registro["produtoAtual"],
                "oferta": Json(registro["oferta"]),
                "resultado": registro["resultado"],
                "pos_motivo": registro["posMotivo"],
                "sinais": Json(registro["sinais"]),
            },
        ).fetchone()
    return row_to_registro(row)


def list_registros_teste():
    if not database_enabled():
        return [
            registro for registro in read_registros()
            if registro.get("perfilAcesso") == "teste"
        ]

    ensure_db_table()
    with db_connection() as conn:
        rows = conn.execute(
            """
            select *
            from registros
            where perfil_acesso = 'teste'
            order by created_at desc
            limit 500
            """
        ).fetchall()
    return [row_to_registro(row) for row in rows]


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username", "")
        password = request.form.get("password", "")
        user = USERS.get(username)
        valid_password = bool(user) and hmac.compare_digest(password, user["password"])

        if user and valid_password:
            session.clear()
            session["logged_in"] = True
            session["username"] = username
            session["role"] = user["role"]
            if user["role"] == "admin":
                return redirect(url_for("dashboard"))
            return redirect(url_for("home"))

        return redirect(url_for("login", error="1"))

    if session.get("logged_in"):
        if session.get("role") == "admin":
            return redirect(url_for("dashboard"))
        return redirect(url_for("home"))

    return send_from_directory(BASE_DIR / "private", "login.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))


@app.route("/")
@login_required
def home():
    return send_from_directory(BASE_DIR / "private", "index.html")


@app.route("/dashboard")
@admin_required
def dashboard():
    return send_from_directory(BASE_DIR / "private", "dashboard.html")


@app.route("/style.css")
def style():
    return send_from_directory(BASE_DIR, "style.css")


@app.route("/script.js")
@login_required
def script():
    return send_from_directory(BASE_DIR / "private", "script.js")


@app.route("/dashboard.js")
@admin_required
def dashboard_script():
    return send_from_directory(BASE_DIR / "private", "dashboard.js")


@app.route("/api/me")
@login_required
def me():
    return jsonify({
        "username": session.get("username"),
        "role": session.get("role"),
    })


@app.route("/api/registros", methods=["GET", "POST"])
@login_required
def registros():
    if request.method == "POST":
        payload = request.get_json(silent=True) or {}
        registro = {
            "id": str(uuid4()),
            "usuario": session.get("username"),
            "perfilAcesso": session.get("role"),
            "data": payload.get("data"),
            "motivo": payload.get("motivo"),
            "perfil": payload.get("perfil"),
            "produtoAtual": payload.get("produtoAtual"),
            "oferta": payload.get("oferta", []),
            "resultado": payload.get("resultado"),
            "posMotivo": payload.get("posMotivo"),
            "sinais": payload.get("sinais", []),
        }

        registro_salvo = save_registro(registro)
        return jsonify({"ok": True, "registro": registro_salvo}), 201

    if session.get("role") != "admin":
        return jsonify({"error": "Acesso restrito ao admin."}), 403

    return jsonify({"registros": list_registros_teste()})
