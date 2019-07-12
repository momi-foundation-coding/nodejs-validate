var assert = require("assert");
var validator = require("../lib/index.ts");

var validIsnb = validator.isISNB("978-3-16-148410-0");
var validIsnb2 = validator.isISNB("0-19-852663-6");
var invalidIsnb = validator.isISNB("978-3-16-148410-02");

assert.strictEqual(validIsnb, true);
assert.strictEqual(validIsnb2, true);
assert.strictEqual(invalidIsnb, false);
