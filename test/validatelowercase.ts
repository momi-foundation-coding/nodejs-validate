var assert = require("assert");
var validator = require("../lib/index.ts");

var validLowercase = validator.isLowercase("abcdef");
var invalidLowercase = validator.isLowercase("hsssTY");

assert.strictEqual(validLowercase, true);
assert.strictEqual(invalidLowercase, false);
