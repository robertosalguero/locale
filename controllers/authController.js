const passport = require('passport');


function renderLogin(req, res) {
  res.render('auth', { errors: req.flash('error') });
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/main',
  failureRedirect: '/auth/login',
  failureFlash:    'Invalid username and password',
});

function handleLogout(req, res) {
  req.logout();
  res.redirect('/');
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
  handleLogout,
  usersOnly,
};
