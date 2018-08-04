const express = require('express');
const passport = require('passport');
const control = require('../controllers/authController');

const authRouter = express.Router();

authRouter.route('/login')
  .get(control.renderLogin)
  .post(control.handleLogin);


authRouter.get('/logout', (req, res) => {
  control.handleLogout();
});

module.exports = authRouter;
