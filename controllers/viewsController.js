module.exports = {


    showAll(req, res) {
      res.format({
        html() {
          res.render('main', { posts: res.locals.posts });
        },
        json() {
          res.json(res.locals.posts);
        },
      });
    },
  
  
  };
  