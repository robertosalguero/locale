const express        = require('express');
// const { Converter }  = require('showdown');

const authController = require('../controllers/authController');
const postController = require('../controllers/postController');
const viewController = require('../controllers/viewsController');

const postRouter = express.Router();
// const converter    = new Converter({ tables: true });

postRouter.use(authController.usersOnly);


const showJSON = (req, res) => {
  res.json(res.locals.data);
};

const handle404 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(404);
};

postRouter.route('/')
  .get(postController.index, viewController.showAll);


postRouter.use(handle404);

module.exports = postRouter;