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

Credenciais provisórias:

```text
Admin
login: admin
senha: adimin

Teste
login: teste
senha: teste10
```

O acesso `teste` usa a jornada comercial e registra as pesquisas de pós-venda.
O acesso `admin` abre o dashboard para acompanhar os registros feitos pelo usuário de teste.

Para trocar no Vercel, configure variáveis de ambiente:

```text
APP_ADMIN_USER
APP_ADMIN_PASSWORD
APP_TEST_USER
APP_TEST_PASSWORD
SECRET_KEY
```

## Dados salvos

Se `DATABASE_URL` ou `POSTGRES_URL` estiver configurado, os registros são salvos no Postgres/Supabase.
Sem essa variável, o projeto usa `data/registros.json` apenas como fallback local.

No Vercel, configure uma destas variáveis:

```text
DATABASE_URL
```

Use a connection string do Supabase neste formato, trocando `[YOUR-PASSWORD]` pela senha real:

```text
postgresql://postgres:[YOUR-PASSWORD]@db.jpzyxazyfjtpkysxknse.supabase.co:5432/postgres
```

O sistema cria a tabela `registros` automaticamente no primeiro registro. Se preferir criar manualmente no SQL Editor do Supabase:

```sql
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
);
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
