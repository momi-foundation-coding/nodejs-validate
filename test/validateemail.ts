var assert = require('assert');
var validator = require('../index.ts');

var validEmail = validator.isEmail('email@email.com');
var inValidEmail = validator.isEmail('notemail@notemail');

assert.strictEqual(validEmail, true);
assert.strictEqual(inValidEmail, false);
