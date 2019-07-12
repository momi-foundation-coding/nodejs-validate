var assert = require("assert");
var validator = require("../lib/index.ts");

var validURL = validator.isURL("https://github.com/kemboijs/kemboijs-validator");
var invalidURL = validator.isURL("thisisnoturl");

assert.strictEqual(validURL, true);
assert.strictEqual(invalidURL, false);
