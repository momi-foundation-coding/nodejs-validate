var assert = require('assert');
var validator = require('../index.ts');

var validEmail = validator.isEmail('email@email.com');
var inValidEmail = validator.isEmail('notemail@notemail');

describe("Validate Email", () => {
    it("should return true", () => {
        assert.strictEqual(validEmail, true);
    });
    it("should return false", () => {
        assert.strictEqual(inValidEmail, false);
    });
});
