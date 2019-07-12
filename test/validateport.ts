var assert = require("assert");
var validator = require("../lib/index.ts");

// Why expect string and I am passing number
var validPort = validator.isPort("655");
var invalidPort = validator.isPort("65536");

assert.strictEqual(validPort, true);
assert.strictEqual(invalidPort, false);
