const app        = require('express')();
const logger     = require('morgan');
// const path       = require('path');
const bodyParser = require('body-parser');
const passport   = require('passport');
const session    = require('express-session');
// const override   = require('method-override');
const flash        = require('req-flash');

const postRouter = require('./routes/postRouter');
const authRouter     = require('./routes/authRouter');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

require('./config/passport');

app.use(logger('dev'));

app.use(session({
    secret:            'lambda-secret',
    resave:            false, // info on resave: https://github.com/expressjs/session#resave
    saveUninitialized: false, // info on saveUninitialized: https://github.com/expressjs/session#saveuninitialized
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(flash());

app.use('/main', postRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    console.log(req.user);
    res.redirect('/auth/login');
});

app.listen(PORT, () => console.log(`Listening on port: ${3000}`));

module.exports = {
    app
}