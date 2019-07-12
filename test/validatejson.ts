var assert = require("assert");
var validator = require("../lib/index.ts");

var validJson = validator.isJSON(`{ "name": "John" }`);
/**
 * Make sure to check if valid json allow other types apart from object
 * E.g
 * var validJson2 = validator.isJSON(`[{ name: "Name is here", email: "Email is here" }]`);
 * assert.strictEqual(validJson2, true);
*/
var invalidJson = validator.isJSON("978-3-16-148410-02");

assert.strictEqual(validJson, true);
assert.strictEqual(invalidJson, false);
