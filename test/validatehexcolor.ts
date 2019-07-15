var assert = require("assert");
import validator from '../lib';

var validHexColor = validator.isHexColor("#00FF00");
var invalidHexColor = validator.isHexColor("#00FF009");

describe("Validate Hex Color", () => {
    it("should return true", () => {
        assert.strictEqual(validHexColor, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidHexColor, false);
    });
});
