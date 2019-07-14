var assert = require("assert");
var validator = require("../lib/index.ts");

var validMobilePhone = validator.isMobilePhone("+254726784945");
var invalidMobilePhone = validator.isMobilePhone("op900022233");

describe("Validate MAC address", () => {
    it("should return true", () => {
        assert.strictEqual(validMobilePhone, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidMobilePhone, false);
    });
});
