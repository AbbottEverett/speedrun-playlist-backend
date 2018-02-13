const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const knex = require('./db');
const masterRoute = require('./src/routes/master');

app.use(bodyParser.json());

app.use('/', masterRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err });
});

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Route not found!' }});
});

function listener() {
  console.log(`Listening on port ${port}...`);
}

app.listen(port, listener);
