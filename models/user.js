const db = require('../config/database');
const bcrypt = require('bcrypt');

const User = {};

User.create = (user) => {
  //create variable for encrypted password:
  const password = bcrypt.hashSync(user.password, 10);

  return db.none(`INSERT INTO users
    (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)`,
    [user.first_name, user.last_name, user.email, password])
};


User.findByEmail = (email) => {
  return db.oneOrNone(`SELECT * FROM users WHERE email = $1`,
    [email]);
};

module.exports = User;
