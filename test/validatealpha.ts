var assert = require("assert");
var validator = require("../lib/index.ts");

var validAlpha = validator.isAlpha("A");
var invalidAlpha = validator.isAlpha("1");

describe("Validate Alpha", () => {
    it("should return true", () => {
        assert.strictEqual(validAlpha, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidAlpha, false);
    });
});
