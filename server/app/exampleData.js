var mongoose = require('mongoose');
var User = require('./models').User;
var connection = mongoose.connect('mongodb://localhost/api');

var name_one = process.argv[2];
var u = new User();
u.username = name_one,
u.password = u.generateHash(name_one);
u.email = name_one + "@" + name_one + "." + name_one;
u.userPic = "http://" + name_one + "." + name_one;
u.save(function(err, user){
    if (err) console.log(err);
    console.log('user ' + u.username + ' added to db');
});
var name_two = process.argv[3];
var v = new User();
v.username = name_two,
v.password = v.generateHash(name_two);
v.email = name_two + "@" + name_two + "." + name_two;
v.userPic = "http://" + name_two + "." + name_two;
v.save(function(err, user){
    if (err) console.log(err);
    console.log('user ' + v.username + ' added to db');
});
