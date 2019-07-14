var assert = require("assert");
var validator = require("../lib/index.ts");

// It only accepts string and no passing numbers
var validInt = validator.isInt("12");
var invalidInt = validator.isInt("we");

describe("Validate Int", () => {
    it("should return true", () => {
        assert.strictEqual(validInt, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidInt, false);
    });
});
