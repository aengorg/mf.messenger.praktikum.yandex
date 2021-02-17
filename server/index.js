require('dotenv').config();

const path = require('path');
const express = require('express');
const helmet = require('helmet');
const app = express();

const { PATH_STATIC, PORT } = process.env;
const HOST_API = 'https://ya-praktikum.tech';

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ['default-src', "'self'", HOST_API],
        scriptSrc: ["'self'", "'unsafe-eval'"],
        objectSrc: ["'self'"],
      },
    },
  }),
);

app.use('/', express.static(path.join(__dirname, PATH_STATIC)));
app.get('/*', (req, res) => res.redirect('/#error404'));

app.listen(PORT, () => {
  console.log(`App http://localhost:${PORT}/#`);
});
