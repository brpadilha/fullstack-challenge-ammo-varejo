# Ammo Varejo - FullStack Challenge

## Descrição
Este projeto tem por finalidade avaliar o conhecimento técnico de candidatos a vagas de desenvolvimento FullStack da Ammo Varejo
o projeto consiste e montar uma aplicação web que permita listar produtos, além de poder filtrar por nome e paginação.

## Requisitos
- NodeJS

## Instalação
- Clone o projeto

### backend
- Acesse a pasta backend com: `cd backend`
- Instale as dependências com: `npm install`
- rode a migration do banco de dados com: `npx prisma migrate dev --name init`
- rode o projeto com: `npm run start:dev`

## frontend
- Acesse a pasta frontend com: `cd frontend`
- Instale as dependências com: `npm install`
- rode o projeto com: `npm run start`

O projeto estará disponível em: http://localhost:5173

Ao acessar o site, você notará já uma lista de produtos que já foi alimentada pelo seed no backend,
conforme pedido no desafio, você poderá filtrar por nome e também ver no bottom da página a paginação dos produtos.

Inclusive a paginação modifica de acordo com os itens filtrados.

O limite de itens por página é de 25 itens.
