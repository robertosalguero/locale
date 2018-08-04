const model = require('../models/post');

module.exports = {

    index(req, res, next) {
        model.findAll()
          .then((posts) => {
            res.locals.posts = posts;
            next();
          })
          .catch(e => next(e));
      },
    }