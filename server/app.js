const express = require("express");
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(require("./app/routes/routes.js"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})