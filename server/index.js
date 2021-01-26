require('dotenv').config();

const path = require('path');
const express = require('express');
const helmet = require('helmet');
const app = express();

const { HOST, PATH_STATIC, PORT } = process.env;

// app.use(helmet());

app.use('/', express.static(path.join(__dirname, PATH_STATIC)));

app.listen(PORT, () => {
  console.log(`App http://localhost:${PORT}/public/#`);
});
