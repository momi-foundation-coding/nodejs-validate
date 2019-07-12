var assert = require("assert");
var validator = require("../lib/index.ts");

var validAlpha = validator.isAlpha("A");
var invalidAlpha = validator.isAlpha("1");

assert.strictEqual(validAlpha, true);
assert.strictEqual(invalidAlpha, false);
