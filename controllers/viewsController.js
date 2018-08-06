module.exports = {


    showAll(req, res) {
          res.render('main', { posts: res.locals.posts, user: req.user });
  },

    handleUpdate(req, res) {
      res.render('profile', { user: req.user});
  },

    logout(req, res) {
          res.render('auth');
    },

  };
  