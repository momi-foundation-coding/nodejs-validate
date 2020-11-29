import * as assert from "assert";
import validator from '../lib';

var validJson = validator.isJSON(`{ "name": "John" }`);
/**
 * Make sure to check if valid json allow other types apart from object
 * E.g
 * var validJson2 = validator.isJSON(`[{ name: "Name is here", email: "Email is here" }]`);
 * assert.strictEqual(validJson2, true);
*/
var invalidJson = validator.isJSON("978-3-16-148410-02");

describe("Validate JSON", () => {
    it("should return true", () => {
        assert.strictEqual(validJson, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidJson, false);
    });
});
