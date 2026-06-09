# Cliente Oculto Loja

Ferramenta Flask para apoio ao atendimento presencial do Canal Agente Autorizado, com roteiro de abordagem e pesquisa pós-cliente.

## Estrutura

```text
cliente_oculto_loja/
  app.py
  style.css
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

Não use `vercel.json` neste projeto. A Vercel detecta o Flask automaticamente pelo arquivo `app.py` e pelo `requirements.txt`.

Confirme também que estes arquivos não estão na raiz do projeto:

```text
index.html
login.html
script.js
```

Eles precisam ficar dentro da pasta `private/` para não serem publicados como arquivos estáticos.
