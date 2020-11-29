import * as assert from "assert";
import validator from '../lib';

// Why expect string and I am passing number
var validPort = validator.isPort("655");
var invalidPort = validator.isPort("65536");

describe("Validate PORT", () => {
    it("should return true", () => {
        assert.strictEqual(validPort, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidPort, false);
    });
});
