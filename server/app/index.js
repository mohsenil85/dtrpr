var express = require('express');
var expose = require('express-expose');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var passport = require('passport');

var router = require('./routes/mainRouter');

var app = express();

var port = process.env.PORT || 7000;

var connection = mongoose.connect('mongodb://localhost/api');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "lol",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:9000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    next();
});


//app.use(function(req, res, next){
//  var user = req.user;
//  if (user){
//    res.cookie('login_token', user.username, {signed: true}) ;
//  }
//  return next();
//});
app.use('/api', router);
//app.use(express.static(__dirname + './../public'));
app.listen(port);
