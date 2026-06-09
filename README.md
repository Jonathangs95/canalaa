# Cliente Oculto Loja

Ferramenta Flask para apoio ao atendimento presencial do Canal Agente Autorizado, com roteiro de abordagem e pesquisa pós-cliente.

## Estrutura

```text
cliente_oculto_loja/
  app.py
  style.css
  vercel.json
  requirements.txt
  README.md
  .gitignore
  private/
    index.html
    login.html
    script.js
```

## Rodar localmente

```powershell
pip install -r requirements.txt
python app.py
```

Depois abra:

```text
http://127.0.0.1:5000
```

## Login

Credencial provisória:

```text
login: admin
senha: adimin
```

Para trocar no Vercel, configure variáveis de ambiente:

```text
APP_ADMIN_USER
APP_ADMIN_PASSWORD
SECRET_KEY
```

## Publicar no Vercel

1. Suba esta pasta inteira para um repositório no GitHub.
2. No Vercel, escolha `Add New Project`.
3. Importe o repositório.
4. Mantenha as configurações padrão e clique em deploy.

O arquivo `vercel.json` força as rotas a passarem pelo Flask. Isso evita que o Vercel entregue o HTML como página estática e pule o login.
