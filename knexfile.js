'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/speedruns_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
