const bodyParser = require("body-parser");
const users = require("./user");
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const cors = require("cors");

module.exports = app => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({extended: true}));
  
  router.get('/', function(req, res) {
    res.send('home page');
  });

  app.use(cors());
  app.use(users);
}