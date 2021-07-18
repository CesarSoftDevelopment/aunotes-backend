const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const produtoController = require('./src/controllers/produtoController');
const sobreController = require('./src/controllers/sobreController');
const logonController = require('./src/controllers/logonController');

//rotas entrada
route.get('/', homeController.index);
route.get('/produto', produtoController.produto);
route.get('/sobre', sobreController.sobre);

//rotas logon
route.get('/logon/cadastro', logonController.inscrever);
route.post('/logon/register', logonController.register);

//rotas login
route.get('/login/entrar', logonController.entrar);
route.post('/login/entrada', logonController.entrada);



module.exports = route;