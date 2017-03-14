// lets call database express_decidr

const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'express_decidr'
});

module.exports = db;
