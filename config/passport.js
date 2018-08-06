const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userDB = require('../models/user');


passport.use(new LocalStrategy((name, password, done) => (
  userDB.login(name, password)
    .then(user => done(null, user))
    .catch(err => done(null, false)))));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userDB.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

