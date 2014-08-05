var express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var _ = require('lodash');

var User = require('../models').User;
var Trip = require('../models').Trip;

var router = express.Router();


router.route('/')
  .get(function(req, res){
    Trip.find(function(err, trips){
      if(err) res.send(err);
      res.json(trips);
    });
  })
  .post(function(req, res){
    var newTrip = new Trip({
      orig : req.body.orig,
      dest: req.body.dest,
      driver: req.body.driver
      //passengers.append : req.body.passengers
    });

    newTrip.passengers.push(req.body.passengers);
    newTrip.save(function(err, trip){
      if(err) res.send(err);
      res.json(trip);
    });
  });

router.route('/:id')
  .get(function(req, res){
    Trip.findById(req.params.id, function(err, trip){
      if(err) res.send(err);
      res.json(trip);
    });
  })
  .put(function(req, res){
    Trip.findById(req.params.id, function(err, trip){
      if(err) res.send(err);
      _.merge(trip, req.body);
      trip.save(function(err, trip){
        if(err) res.send(err);
        res.json(trip);
      });
    });
  })
  .delete(function(req, res){
      Trip.findByIdAndRemove(req.params.id, function(err){
        if(err) res.send(err);
        res.send(204);
      });
    });

router.route('/:id/passengers')
  .get(function(req, res){
    Trip.findById(req.params.id, function(err, trip){
      if(err) res.send(err);
      res.json(trip.passengers);
    });
  })
  //post = erase any existing passenges and add new ones
  .post(function(req, res){
    Trip.findById(req.params.id, function(err, trip){
      if(err) res.send(err);
      //first, save the passenger id into trip arr
      //erase old passengers arr
      //must process passengers one at a time
      trip.passengers = req.body.passengers;
      //insertPassengers(req.body.passengers, trip);
      trip.save(function(err, trip){
        if(err) res.send(err);
        res.json(trip.passengers);
      });
      //the main object in the db is the trip, not the users
      // so if a user clicks on "get my trips", it'll be something like
      //trips.find(user id)?
      //the following works:  db.trips.find({"passengers": ObjectId("53bdc28fe3618b00001151c1") })
    });
  })
  //must put them one at a time
  .put(function(req, res){
    Trip.findById(req.params.id, function(err, trip){
      if (err) res.send(err);
      trip.passengers.push(req.body.passengers);
      trip.save(function(err, trip){
        if(err) res.send(err);
        res.json(trip.passengers);
      });
    });

  })
  .delete(function(req, res){
    Trip.findById(req.params.id, function(err, trip){
      if (err) res.send(err);
      trip.passengers = [];
      trip.save(function(err, trip){
        if(err) res.send(err);
        res.json(trip.passengers);
      });
    });

  });

module.exports = router;
