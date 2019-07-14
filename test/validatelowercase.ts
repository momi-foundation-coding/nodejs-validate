var assert = require("assert");
var validator = require("../lib/index.ts");

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
