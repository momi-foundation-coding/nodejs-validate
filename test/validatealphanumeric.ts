var assert = require("assert");
var validator = require("../lib/index.ts");

var isValidAlphaNumeric = validator.isAlphaNumeric("23ABC");
var isNotValidAlphaNumeric = validator.isAlphaNumeric("...?");

assert.strictEqual(isValidAlphaNumeric, true);
assert.strictEqual(isNotValidAlphaNumeric, false);
