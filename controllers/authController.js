const passport = require('passport');
const userDB = require('../models/user');


function renderLogin(req, res) {
  res.render('auth', { errors: req.flash('error') });
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/auth/login',
  failureFlash:    'Invalid username and password',
});

function renderRegister(req, res) {
  res.render('register', { errors: req.flash('error') });
}

function handleRegister(req, res, next) {
  const { username, password } = req.body;
  userDB.register(username, password)
    .then((newUser) => {
      req.login(newUser, err => (err ? next(err) : res.redirect('/')));
    })
    .catch((err) => {
      req.flash('error', 'username unavailable');
      res.redirect('/auth/register');
    });
}

function handleLogout(req, res) {
  req.logout();
  res.redirect('/auth/login');
}

function usersOnly(req, res, next) {
  if (req.user) {
    next();
  } else {
    req.flash('error', 'Login required');
    res.redirect('/auth/login');
  }
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
  handleLogout,
  usersOnly,
};
