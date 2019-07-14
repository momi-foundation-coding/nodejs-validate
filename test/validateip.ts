var assert = require("assert");
var validator = require("../lib/index.ts");

var validIp = validator.isIP("204.120.0.15");
var invalidIp = validator.isIP("204.1.0");

describe("Validate IP", () => {
    it("should return true", () => {
        assert.strictEqual(validIp, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidIp, false);
    });
});
