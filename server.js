const app        = require('express')();
const logger     = require('morgan');
// const path       = require('path');
const bodyParser = require('body-parser');
const passport   = require('passport');
const session    = require('express-session');
const override   = require('method-override');
const flash      = require('req-flash');
const postRouter = require('./routes/postRouter');
const authRouter = require('./routes/authRouter');
const editRouter = require('./routes/editRouter');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

require('./config/passport');

app.use(logger('dev'));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(override('_method'));
app.use(bodyParser.json());

app.use(flash());

app.use('/auth', authRouter);
app.use('/main', postRouter);
app.use('/users', editRouter);

app.get('/', (req, res) => {
    console.log(req.user);
    res.redirect('/auth/login');
});

app.listen(PORT, () => console.log(`Listening on port: ${3000}`));

module.exports = {
    app
}