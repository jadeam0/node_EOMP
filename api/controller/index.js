const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const Users = require('../model/users.js');
const Products  = require('../model/products');
const users = new Users();
const products = new Products();


//=======User's Router============
routes.get('/users', (req, res) => {
    users.fetchUsers(req, res);
});

routes.get('/user/:id', (req, res) => {
    users.fetchUsers(req, res);
});

routes.post('/register', bodyParser.json(), (req,res) => {
    users.register(req, res);
});

routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});

routes.patch('/user/:id', bodyParser.json(), (req,res) => {
    users.updateUser(req, res);
});
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res);
});

//========== Products Router=========
routes.get('/products', (req, res) => {
    products.fetchProduct(req, res);
});

routes.get('/product/:id', (req,res) => {
    Products.fetchproduct(req, res);
});

routes.post('/product', bodyParser.json(), (req, res) => {
    Products.addProduct(req, res);
});

routes.put('/product/:id', bodyParser.json(), (req, res) => {
    Products.updateProduct(req, res);
});

routes.delete('/product/:id', (req, res) => {
    Products.deleteProduct(req, res);
});

module.exports = {
    express,
    routes
}