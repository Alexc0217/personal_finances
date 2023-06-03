const bodyParser = require("body-parser");
const users = require("./user");
const defaults = require("./default");
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const cors = require("cors");

module.exports = app => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({extended: true}));
  
  app.use(cors());
  app.use(defaults);
  app.use(users);
}