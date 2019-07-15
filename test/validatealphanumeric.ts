var assert = require("assert");
import validator from '../lib';

var isValidAlphaNumeric = validator.isAlphaNumeric("23ABC");
var isNotValidAlphaNumeric = validator.isAlphaNumeric("...?");

describe("Validate Alpha Numeric", () => {
    it("should return true", () => {
        assert.strictEqual(isValidAlphaNumeric, true);
    });
    it("should return false", () => {
        assert.strictEqual(isNotValidAlphaNumeric, false);
    });
});
