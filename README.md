# API de Blog 📝

Este projeto consiste no desenvolvimento de uma API para um blog, utilizando Node.js e o pacote Sequelize. A API permite a criação, leitura, atualização e exclusão de posts, além de oferecer recursos de autenticação de usuários.

## Tecnologias utilizadas 🚀

- Node.js
- Sequelize
- Docker

## Funcionalidades ⚙️

- CRUD de posts: os usuários podem criar, ler, atualizar e excluir posts.
- Autenticação de usuários: é necessário efetuar o login para realizar operações de criação de posts.
- Relação entre usuários e posts: cada post está associado a um usuário específico.
- Categorias de posts: os posts podem ser classificados em categorias, permitindo uma organização mais eficiente.

## Executando o projeto 🏃‍♀️

Para executar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório em sua máquina.
2. Certifique-se de ter o Node.js instalado.
3. Instale as dependências do projeto executando o comando `npm install`.
4. Inicialize o banco de dados e a aplicação. Se você estiver utilizando o Docker, execute o comando `docker-compose up -d`. Caso contrário, verifique as configurações do seu banco de dados e execute o comando `npm start`.
5. Acesse a API através do endpoint `http://localhost:3000`.

Aproveite a experiência de trabalhar com o desenvolvimento de uma API para um blog e explore as funcionalidades implementadas. ✨
