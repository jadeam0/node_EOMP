require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errorHandling } = require('./middleware/errorHandeling');
const { routes } = require('./controller/index')
const Port = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false}));


app.use(
  cors(),
  cookieParser(),
  express.json(),
  routes
);



app.use(errorHandling);

app.listen(Port, () => {
  console.log(`The server is running on port ${Port}`);
});