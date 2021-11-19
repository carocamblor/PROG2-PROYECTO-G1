var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
const db = require('./database/models');

var app = express();
// db.sequelize.sync ({alter:true});

app.use( //configuracion de session. Nos agreega la variable req.session
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //da 7 dias y 1.000 segundos
    },
  }),
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(logger('dev'));
app.use(express.json()); //se fija lo que viene en la request y la pasa json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middleaware cookies
app.use(async (req, res, next) => { 
  if (req.cookies.user !== undefined && req.session.userLoggedOn === undefined) {
    req.session.userLoggedOn = req.cookies.user; 
  }
  next(); 
});


app.use(async (req, res, next) => { //Middleware de Session. Poner en vistas
  if (req.session.userLoggedOn) {
    res.locals.userLoggedOn = await db.User.findByPk(req.session.userLoggedOn.id); //res.locals es varible que se comparte con las vistas
  }
  //res.locals.userLoggedOn = req.session.userLoggedOn;
  next();
}); //se ejecuta siempre a menos que uno de una respuesta
//en el login lo implementamos

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
