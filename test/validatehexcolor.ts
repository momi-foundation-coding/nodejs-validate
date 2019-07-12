var assert = require("assert");
var validator = require("../lib/index.ts");

var validHexColor = validator.isHexColor("#00FF00");
var invalidHexColor = validator.isHexColor("#00FF009");

assert.strictEqual(validHexColor, true);
assert.strictEqual(invalidHexColor, false);
