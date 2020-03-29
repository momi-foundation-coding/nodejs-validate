import assert from "assert";
import validator from '../lib';

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
