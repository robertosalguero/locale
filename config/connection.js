const pgp = require('pg-promise')();

const opts = {
  database: 'proj_dev',
};

const db = pgp(opts);

module.exports = db;