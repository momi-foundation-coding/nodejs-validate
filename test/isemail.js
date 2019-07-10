var assert = require('assert');
var isEmail = require('../index');

var validEmail = isEmail('email@email.com');
var inValidEmail = isEmail('notemail@notemail');

assert(validEmail, true);
assert(inValidEmail, false);
