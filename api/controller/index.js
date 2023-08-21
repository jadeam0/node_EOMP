const express = require('express');
const bodyParser = require('body-parser');
const userRouter = express.Router();
const Users = require('../model/users.js');
const users = new Users();

//=======User's Router============
userRouter.get('/users', (req, res) => {
})