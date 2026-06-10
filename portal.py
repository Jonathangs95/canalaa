import hmac
import json
import os
from functools import wraps
from pathlib import Path
from threading import Lock
from uuid import uuid4

from flask import Flask, jsonify, redirect, request, send_from_directory, session, url_for

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
REGISTROS_FILE = DATA_DIR / "registros.json"
REGISTROS_LOCK = Lock()

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

        registros_salvos = read_registros()
        registros_salvos.append(registro)
        write_registros(registros_salvos)
        return jsonify({"ok": True, "registro": registro}), 201

    if session.get("role") != "admin":
        return jsonify({"error": "Acesso restrito ao admin."}), 403

    registros_teste = [
        registro for registro in read_registros()
        if registro.get("perfilAcesso") == "teste"
    ]
    return jsonify({"registros": registros_teste})
