require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

const { HOST, PORT } = process.env;

app.use('/', express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, () => {
  console.log(`App http://localhost:${PORT}`);
});
