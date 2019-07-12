var assert = require("assert");
var validator = require("../lib/index.ts");

var validMobilePhone = validator.isMobilePhone("+254726784945");
var invalidMobilePhone = validator.isMobilePhone("op900022233");

assert.strictEqual(validMobilePhone, true);
assert.strictEqual(invalidMobilePhone, false);
