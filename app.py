import hmac
import os
from functools import wraps

from flask import Flask, redirect, request, send_from_directory, session, url_for

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "troque-esta-chave-em-producao")
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
)

ADMIN_USER = os.environ.get("APP_ADMIN_USER", "admin")
ADMIN_PASSWORD = os.environ.get("APP_ADMIN_PASSWORD", "adimin")


def login_required(route_handler):
    @wraps(route_handler)
    def wrapped(*args, **kwargs):
        if not session.get("logged_in"):
            return redirect(url_for("login"))
        return route_handler(*args, **kwargs)

    return wrapped


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username", "")
        password = request.form.get("password", "")
        valid_user = hmac.compare_digest(username, ADMIN_USER)
        valid_password = hmac.compare_digest(password, ADMIN_PASSWORD)

        if valid_user and valid_password:
            session.clear()
            session["logged_in"] = True
            return redirect(url_for("home"))

        return redirect(url_for("login", error="1"))

    if session.get("logged_in"):
        return redirect(url_for("home"))

    return send_from_directory("private", "login.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))


@app.route("/")
@login_required
def home():
    return send_from_directory("private", "index.html")


@app.route("/style.css")
def style():
    return send_from_directory(".", "style.css")


@app.route("/script.js")
@login_required
def script():
    return send_from_directory("private", "script.js")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
