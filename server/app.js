const routes = require("./app/routes/index.js");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const express = require("express");
const app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes(app);

module.exports = app;