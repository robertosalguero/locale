const bcrypt = require('bcryptjs');
const db = require('../config/connection.js');

function register(name, password) {
  return bcrypt.hash(password, 8)
    .then((hash) => {
      return db.one(`
          INSERT INTO users (name, password_digest)
          VALUES ($/name/, $/password_digest/)
          RETURNING *
        `, {
        name,
        password_digest: hash,
      });
    });
}

function findById(id) {
  return db.one(`
    SELECT *
    FROM users
    WHERE id = $1
  `, id);
}

function findByUsername(name) {
  return db.one(`
      SELECT * FROM users
      WHERE name = $1
    `, name);
}


async function login(name, password) {
  try {
    const user = await findByUsername(name);
    const res = await bcrypt.compare(password, user.password_digest);
    if (!res) {
      throw new Error('bad password');
    }
    delete user.password_digest;
    return user;
  } catch (err) {
    throw new Error('Unauthorized');
  }
}
  function update(user) {
    console.log(user)
    return db.one(`
    UPDATE users
    SET 
      name = $/name/,
      bio = $/bio/
    WHERE id = $/id/
    RETURNING *
    `, user);
  }


module.exports = {
  register,
  login,
  update,
  findById,
  
};
