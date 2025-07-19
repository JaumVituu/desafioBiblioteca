# 📕📗 Biblioteca de Livros 📙📘

**Projeto totalmente desenvolvido em Next.js!**

_Desenvolvido por João Vitor dos Santos_

A aplicação consiste em um exemplo simples de visualização e cadastro de livros.

💻 Codificação em **Typescript e React**, com estilização em **Tailwind CSS**

🖥 Tratamento de requisições com **API Routes**, direto do próprio Next.js

📋 Validação de formulários com **Hook Form e Zod**

📊 Banco de dados **PostgreSQL** hospedado online na **Supabase** 

## Funcionalidades

Na aplicação entitulada de **"Biblioteca Agora"**, você pode:

- **Consultar** uma lista de livros cadastrados no site;
- **Cadastrar** um novo livro;
- Ver os **detalhes** de um determinado livro;
- **Filtrar** os resultados por parâmetros;
- **Buscar** livros e/ou autores;

> Obs.: Também foram inseridas funções para deletar os livros e inserção de livro de exemplo para efetuar teste de funcionalidades.
## Execução

Você pode executar a aplicação:

### Pelo link do [deploy que fiz na Vercel](https://desafio-biblioteca-repertorio.vercel.app/)

ou

### Por editor de código

Pra isso, você vai precisar criar um arquivo na pasta principal chamado .env.local, pra armazenar as variáveis de ambiente.

Dentro do .env.local, você cola esse trecho:

```.env.local
DATABASE_URL = postgresql://postgres.venyimqbengnaewivaic:nOEiHZKxiHT9onsj@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
NEXT_PUBLIC_BASE_URL = http://localhost:3000
```

Depois, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

(Caso prefira, execute **npm run build**, demora pra compilar mas a execução é mais rápida)

E pra executar, acesse [http://localhost:3000](http://localhost:3000).

## CHATGPT UTILIZADO em:
- Duvidas de sintaxe
- correção de erros
- aplicação de Hook Form + Zod
- aplicação de useState
- aplicação de API Routes

<p align="center">
  <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-dos-santos-ads/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="40" height="40"/>
  </a>
  <br/>
  <strong>Fique à vontade para conferir meu Linkedin</strong>
</p>
