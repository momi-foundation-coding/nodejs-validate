var assert = require("assert");
var validator = require("../lib/index.ts");

// It only accepts string and no passing numbers
var validInt = validator.isInt("12");
var invalidInt = validator.isInt("we");

assert.strictEqual(validInt, true);
assert.strictEqual(invalidInt, false);
