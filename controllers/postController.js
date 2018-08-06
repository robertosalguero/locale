const model = require('../models/post');


module.exports = {

  createNewPost(req, res, next) {
    model.save({ ...req.body, user_id: req.user.id })
      .then((post) => {
        console.log(req.user.id)
        res.redirect('/main');
      })
      .catch(e => next(e));
    
    },

    index(req, res, next) {
        model.findAll()
          .then((posts) => {
            res.locals.posts = posts;
            next();
          })
          .catch(e => next(e));
      },

      destroy(req, res, next) {
        model.destroy(req.params.id)
          .then(() => {
          res.redirect('/main');
          })
          .catch(e => next(e));
      },
    };