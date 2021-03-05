const path = require('path');
const express = require('express');
const helmet = require('helmet');
const app = express();

const { PORT = 80 } = process.env;
const PATH_STATIC = './dist';

app.use('/', express.static(path.join(__dirname, PATH_STATIC)));
app.get('/*', (req, res) => res.redirect('/#error404'));

app.listen(PORT, () => {
  console.log(`App http://localhost:${PORT}/#`);
});
