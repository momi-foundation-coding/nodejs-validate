import assert from "assert";
import validator from '../lib';

/**
 * Do some investigations here
 * On Mac address like A9C5D49FEBD3 --- A9-C5-D4-9F-EB-D3
 */
var validMACAddress = validator.isMACAddress("A9:C5:D4:9F:EB:D3");
var invalidMACAddress = validator.isMACAddress("A9-C5-9IF-EB-D3");

describe("Validate MAC address", () => {
    it("should return true", () => {
        assert.strictEqual(validMACAddress, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidMACAddress, false);
    });
});
