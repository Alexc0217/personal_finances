const express = require("express");
const app = express();
const port = 3000;
const routes = require("./app/routes/index.js");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})