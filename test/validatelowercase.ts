import assert from "assert";
import validator from '../lib';

var validLowercase = validator.isLowercase("abcdef");
var invalidLowercase = validator.isLowercase("hsssTY");

describe("Validate Lowercase", () => {
    it("should return true", () => {
        assert.strictEqual(validLowercase, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidLowercase, false);
    });
});
