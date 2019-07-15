var assert = require("assert");
import validator from '../lib';

// Why expect string and I am passing number
var validNumeric = validator.isNumeric("1");
// Also, is float a valid numeric value
var invalidNumeric = validator.isNumeric("1..");

describe("Validate Numeric", () => {
    it("should return true", () => {
        assert.strictEqual(validNumeric, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidNumeric, false);
    });
});
