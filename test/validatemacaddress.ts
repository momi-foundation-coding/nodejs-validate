var assert = require("assert");
var validator = require("../lib/index.ts");

/**
 * Do some investigations here
 * On Mac address like A9C5D49FEBD3 --- A9-C5-D4-9F-EB-D3
 */
var validMACAddress = validator.isMACAddress("A9:C5:D4:9F:EB:D3");
var invalidMACAddress = validator.isMACAddress("A9-C5-9IF-EB-D3");

assert.strictEqual(validMACAddress, true);
assert.strictEqual(invalidMACAddress, false);
