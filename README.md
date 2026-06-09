# Cliente Oculto Loja

Ferramenta Flask para apoio ao atendimento presencial do Canal Agente Autorizado, com roteiro de abordagem e pesquisa pós-cliente.

## Estrutura

```text
cliente_oculto_loja/
  app.py
  portal.py
  style.css
  vercel.json
  requirements.txt
  README.md
  api/
    index.py
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
4. Garanta que o projeto está usando a raiz onde ficam `requirements.txt`, `vercel.json` e `api/index.py`.
5. Faça deploy.

O arquivo `api/index.py` é o ponto de entrada da Vercel. O arquivo `vercel.json` manda todas as rotas para essa função Flask.

Confirme que estes arquivos não estão na raiz do projeto:

```text
index.html
login.html
script.js
```

Eles precisam ficar dentro da pasta `private/`.
