import * as assert from "assert";
import validator from '../lib';

var validIsnb = validator.isISNB("978-3-16-148410-0");
var validIsnb2 = validator.isISNB("0-19-852663-6");
var invalidIsnb = validator.isISNB("978-3-16-148410-02");

describe("Validate ISNB", () => {
    it("should return true for 13 digits", () => {
        assert.strictEqual(validIsnb, true);
    });
    it("should return true for 10 digits", () => {
        assert.strictEqual(validIsnb2, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidIsnb, false);
    });
});
