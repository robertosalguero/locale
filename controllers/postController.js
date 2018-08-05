const model = require('../models/post');

module.exports = {

  createNewPost(req, res, next) {
    model.save({ ...req.body, username: req.user.name, user_id: req.user.id })
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
    };