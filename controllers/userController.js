const model = require('../models/user');

module.exports = {  
    update(req, res, next) {
        const { id } = req.params;
        const { name, bio } = req.body;
    
       model.update({id, name, bio})
       .then((post) => {
           console.log(bio)
        res.redirect('/main');
      })
      .catch(e => next(e));
    }
};