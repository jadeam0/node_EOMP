const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const { Users, Products } = require('../model/index');
const product = new Products();
const User = new Users()


//=======User's Router============
routes.post('/login', bodyParser.json(), (req, res) => {
    User.login(req, res);
})
routes.get('/users', (req, res) => {
    User.fetchUsers(req, res);
});

routes.get('/user/:id', (req, res) => {
    User.fetchUser(req, res);
});

routes.post('/register', bodyParser.json(), (req,res) => {
    User.register(req, res);
});

routes.put('/user/:id', bodyParser.json(), (req, res) => {
    User.updateUser(req, res);
});

routes.patch('/user/:id', bodyParser.json(), (req,res) => {
    User.updateUser(req, res);
});
routes.delete('/user/:id', (req, res) => {
    User.deleteUser(req, res);
});

//========== Products Router=========
routes.get('/products', (req, res) => {
    product.fetchProducts(req, res);
});

routes.get('/product/:id', (req, res) => {
    product.fetchproduct(req, res);
});

routes.post('/addProduct', bodyParser.json(), (req, res) => {
    product.addProduct(req, res);
});

routes.put('/product/:id', bodyParser.json(), (req, res) => {
    product.updateProduct(req, res);
});

routes.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res);
});

module.exports = {
    express,
    routes
}