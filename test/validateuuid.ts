var assert = require("assert");
import validator from '../lib';

var validUUID = validator.isUUID("a5764857-ae35-34dc-8f25-a9c9e73aa898");
var invalidUUID = validator.isUUID("a576sd88djdj4857-ae35-34dc-8f25-a9c9e73a");

describe("Validate UUID", () => {
    it("should return true", () => {
        assert.strictEqual(validUUID, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidUUID, false);
    });
});
