var assert = require("assert");
import validator from '../lib';

var validUppercase = validator.isUppercase("ADBH");
var invalidUppercase = validator.isUppercase("aaaaahH");

describe("Validate Uppercase", () => {
    it("should return true", () => {
        assert.strictEqual(validUppercase, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidUppercase, false);
    });
});
