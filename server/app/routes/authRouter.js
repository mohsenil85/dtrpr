var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

require('./../auth.js')(passport);

var User = require('./../models').User;


router.use('/', function(req, res, next){
    if (req.method === "POST") {
        passport.authenticate('auth', function(err, user, info){
            if (err) { return next(err); }
            if (!user) { return res.send(401); }
            req.logIn(user, function(err){
                if(err) return next(err);
                next();
            });
        })(req, res, next);
    } else {
        next();
    }
});
  

  router.route('/')
    .post(function(req, res){
        res.send(req.user);
    })
  .get(function(req, res){
      if (req.user) {
        res.send(req.user);
      } else {
        res.send(401);
      }
  })
  .delete(function(req, res){
      req.logOut();
      res.clearCookie('connect.sid');
      res.clearCookie('express:sess');
      res.clearCookie('express:sess.sig');
      res.clearCookie('login_token');
      res.send(204);
    
  });

module.exports = router;
