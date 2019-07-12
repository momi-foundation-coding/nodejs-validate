var assert = require("assert");
var validator = require("../lib/index.ts");

// Why expect string and I am passing number
var validNumeric = validator.isNumeric("1");
// Also, is float a valid numeric value
var invalidNumeric = validator.isNumeric("1..");

assert.strictEqual(validNumeric, true);
assert.strictEqual(invalidNumeric, false);
