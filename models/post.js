const passport = require('passport');
const db = require('../config/connection');
const model = require('./user');

module.exports = {

  findAll() {
    return db.query(`
    SELECT * FROM posts
    `);
  },
  save(post) {
    return db.one(`
    INSERT INTO posts
    (content, username, user_id)
    VALUES
    ($/content/, $/username/, $/user_id/)
    RETURNING *
  `, post);
  },

};
