var assert = require('assert');
var validator = require('../index');

var validEmail = validator.isEmail('email@email.com');
var inValidEmail = validator.isEmail('notemail@notemail');

assert(validEmail, true);
assert(inValidEmail, false);
