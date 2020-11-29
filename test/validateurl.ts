import * as assert from "assert";
import validator from '../lib';

var validURL = validator.isURL("https://github.com/kemboijs/kemboijs-validator");
var invalidURL = validator.isURL("thisisnoturl");

describe("Validate URL", () => {
    it("should return true", () => {
        assert.strictEqual(validURL, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidURL, false);
    });
});
