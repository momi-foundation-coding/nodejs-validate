var assert = require("assert");
var validator = require("../lib/index.ts");

var validMongoId = validator.isMongoID("551137c2f9e1fac808a5f572");
var invalidMongoId = validator.isMongoID("907f1f779jsddbcf86cd79943901");

assert.strictEqual(validMongoId, true);
assert.strictEqual(invalidMongoId, false);
