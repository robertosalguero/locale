const express = require('express');
const passport = require('passport');
const control = require('../controllers/authController');

const authRouter = express.Router();

authRouter.route('/login')
  .get(control.renderLogin)
  .post(control.handleLogin);

  authRouter.route('/register')
  .get(control.renderRegister)
  .post(control.handleRegister);

authRouter.get('/logout', control.handleLogout);

module.exports = authRouter;
