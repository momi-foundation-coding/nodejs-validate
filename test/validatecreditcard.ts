var assert = require("assert");
import validator from '../lib';

var validCreditCard = validator.isCreditCard("5555555555554444");
var invalidCreditCard = validator.isCreditCard("12793833j8");

describe("Validate Credit Card", () => {
    it("should return true", () => {
        assert.strictEqual(validCreditCard, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidCreditCard, false);
    });
});
