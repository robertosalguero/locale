const passport = require('passport');
const db = require('../config/connection');
const model = require('./user');

module.exports = {

  findAll() {
    return db.query(`
    SELECT 
    posts.id,
    posts.content,
    posts.created_at,
    users.name AS author
    FROM posts
    JOIN users
    ON posts.user_id = users.id
    `);
  },
  save(post) {
    return db.one(`
    INSERT INTO posts
    (content, user_id)
    VALUES
    ($/content/, $/user_id/)
    RETURNING *
  `, post);
  },
  destroy(id) {
    return db.none(`
      DELETE FROM posts
      WHERE id = $1
    `, id);
  },

};
