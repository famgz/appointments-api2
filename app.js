require('dotenv').config();
const express = require('express');
const cors = require('cors');

const SWAGGER_CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
swaggerUi.setup({ customCssUrl: SWAGGER_CSS_URL });

const router = require('./router');

const app = express();

const corsOptions = {
  origin: ['https://consult-med.vercel.app', 'http://localhost:4200'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

if (process.env.NODE_ENV === 'development') {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
