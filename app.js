const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/root.json');
const connectDB = require('./config/db');  
const emailRoutes = require('./routes/email.routes');

const app = express();
const port = 3000;

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey, this is a node server!');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(emailRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
