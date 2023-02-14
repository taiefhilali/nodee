
//seance4

const express = require("express");
const logger=require('morgan');
const createEroor=require('http-errors');
const app = express();
const contactsRouter=require('./routes/contacts.js');
const mongoose=require('mongoose');
const dbconfig=require('./database/mongodb.json')


//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//  app.use((req, res, next) =>{
//       next(createEroor(404));
// });

mongoose.connect(dbconfig.mongo.uri)

app.use('/contact',contactsRouter);
module.exports=app;





















// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


//SEANCE3



// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var osRouter=require('./routes/os')
// var products=require('./routes/products')

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/os', osRouter);
// app.use('/os/opus', osRouter);
// app.use('/os/opus/:id', osRouter);
// app.use('/products', products);
// app.use('/products/:id', products);



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



