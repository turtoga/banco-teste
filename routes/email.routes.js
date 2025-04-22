const express = require('express');
const router = express.Router();
const emailController = require('../controller/emailController')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hey, this is a node server!');
});

app.post('/email', emailController.sendEmail)

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  console.log(`📘 Documentação Swagger em http://localhost:${port}/docs`);
});

module.exports = router;