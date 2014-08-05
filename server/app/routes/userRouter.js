var express = require('express');
var _ = require('lodash');

var User = require('../models').User;
var Trip = require('../models').Trip;

var router = express.Router();


router.route('/')
  .get(function(req, res){
    User.find(function(err, users){
      if(err) res.send(err);
      res.json(users);
    });
  })
  .post(function(req, res){
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.userPic = req.body.userPic;
    newUser.password = newUser.generateHash(req.body.password);
    newUser.save(function(err, user){
      if(err) res.send(err);
      res.json(user);
    });
  });

router.route('/:id')
  .get(function(req, res){
    User.findById(req.params.id, function(err, user){
      if(err) res.send(err);
      res.json(user);
    });
  })
  .put(function(req, res){
    User.findById(req.params.id, function(err, user){
      if(err) res.send(err);
      _.merge(user, req.body);
      user.save(function(err, user){
        if(err) res.send(err);
        res.json(user);
      });
    });
  })
  .delete(function(req, res){
      User.findByIdAndRemove(req.params.id, function(err){
        if(err) res.send(err);
        res.send(204);
      });
    });



router.route('/trips')
  .get(function(req, res){
    Trip.find(function(err, trips){
      if (err) res.send(err);
      res.json(trips);
    });
  })
  .post(function(req, res){
    var newTrip = new Trip({
      dest: req.body.dest,
      orig: req.body.orig,
      driver: req.body.driver
    });
    
  });
module.exports = router;
