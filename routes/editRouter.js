const express        = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const viewController = require('../controllers/viewsController');

const editRouter = express.Router();
editRouter.use(authController.usersOnly);

const handle404 = (err, req, res, next) => {
    console.error(err);
    res.sendStatus(404);
  };
  
  editRouter.route('/:id')
    .get(viewController.handleUpdate)
    .put(userController.update, viewController.showAll);
  
editRouter.use(handle404);

module.exports = editRouter;