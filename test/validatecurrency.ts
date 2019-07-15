var assert = require("assert");
import validator from '../lib';

/**
 * Why does it not allow a number as currency?
 * Will have to check and also check with validator.js before 
 * Raising an issue
*/
var validCurrency = validator.isCurrency("$12.90");
var invalidCurrency = validator.isCurrency("$12.900");

describe("Validate Credit Card", () => {
    it("should return true", () => {
        assert.strictEqual(validCurrency, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidCurrency, false);
    });
});
