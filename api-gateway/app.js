/*
========================================
; Title: app.js
; Author: Professor Krasso
; Date: 25 October 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates an API set up
;========================================
*/

//header
//const header = require("../hairston-header")

//console.log(header.display('Brooklyn','Hairston','app.js'))

//require statements
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');
var apiCatalog = require("./routes/api-catalog");


var app = express();

//database connection
const conn = 'mongodb+srv://admin:admin@buwebdev-cluster-1.iztjy.mongodb.net/api-gateway?retryWrites=true&w=majority'
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.debug('Connection to the database instance was successful!');
}).catch(err => {
  console.log('MongoDB Error: ${err.message}')
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/api", apiCatalog);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
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
