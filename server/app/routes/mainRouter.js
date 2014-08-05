var express = require('express');

var trips = require('./tripRouter');
var users = require('./userRouter');
var auth = require('./authRouter');

var router = express.Router();

router.use('/users', users);
router.use('/trips', trips);
router.use('/auth', auth);

module.exports = router;
