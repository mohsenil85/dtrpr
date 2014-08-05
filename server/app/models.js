var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userPic: {
    type: String,
    required: true
  },

});

var tripSchema = new Schema({
  dest: String,
  orig: String,
//  driver:{ type: Schema.Types.ObjectId, ref: 'User'},
  passengers:[{ type: Schema.Types.ObjectId, ref: 'User'}]
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports.User = mongoose.model('User', userSchema);
module.exports.Trip = mongoose.model('Trip', tripSchema);

