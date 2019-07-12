var assert = require("assert");
var validator = require("../lib/index.ts");

// Why does it not allow numbers insertion. Will need to check on this
var validFloat = validator.isFloat("12.9");
var invalidFloat = validator.isFloat("w");

assert.strictEqual(validFloat, true);
assert.strictEqual(invalidFloat, false);
