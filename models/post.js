const db = require('../config/connection');

module.exports = {

  findAll() {
    return db.query(`
    SELECT * FROM posts
    `);
  },

};
