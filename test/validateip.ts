var assert = require("assert");
var validator = require("../lib/index.ts");

var validIp = validator.isIP("204.120.0.15");
var invalidIp = validator.isIP("204.1.0");

assert.strictEqual(validIp, true);
assert.strictEqual(invalidIp, false);
