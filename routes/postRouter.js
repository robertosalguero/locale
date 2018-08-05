const express        = require('express');

const authController = require('../controllers/authController');
const postController = require('../controllers/postController');
const viewController = require('../controllers/viewsController');

const postRouter = express.Router();

postRouter.use(authController.usersOnly);


const showJSON = (req, res) => {
  res.json(res.locals.data);
};

const handle404 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(404);
};

postRouter.route('/')
  .post(postController.createNewPost)
  .get(postController.index, viewController.showAll);


postRouter.use(handle404);

module.exports = postRouter;