var assert = require("assert");
var validator = require("../lib/index.ts");

var validUppercase = validator.isUppercase("ADBH");
var invalidUppercase = validator.isUppercase("aaaaahH");

assert.strictEqual(validUppercase, true);
assert.strictEqual(invalidUppercase, false);
