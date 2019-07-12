var assert = require("assert");
var validator = require("../lib/index.ts");

/**
 * Why does it not allow a number as currency?
 * Will have to check and also check with validator.js before 
 * Raising an issue
*/
var validCurrency = validator.isCurrency("$12.90");
var invalidCurrency = validator.isCurrency("$12.900");

assert.strictEqual(validCurrency, true);
assert.strictEqual(invalidCurrency, false);
