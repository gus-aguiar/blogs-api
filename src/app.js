const express = require('express');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController.login);
app.post('/user', userController.create);
app.get('/user', userController.findAll);
app.get('/user/:id', userController.findById);
app.post('/categories', categoryController.create);
app.get('/categories', categoryController.findAll);
app.get('/post', postController.findAll);
app.get('/post/:id', postController.findById);
app.post('/post', postController.create);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

// initial commit