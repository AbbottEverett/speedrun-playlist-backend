const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const knex = require('./db');

const runsRoute = require('./src/routes/runs');
const playlistsRoute = require('./src/routes/playlists');

app.use(bodyParser.json());

function getUsers() {
  return knex('users');
}

app.get('/', (req, res, next) => {
  getUsers().then((response) => {
    console.log(response);
  });
  res.status(200).json({ data: 'cool' });
});

app.use('/runs', runsRoute);
app.use('/playlists', playlistsRoute);

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
