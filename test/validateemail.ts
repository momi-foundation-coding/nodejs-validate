import * as assert from "assert";
import validator from '../lib';

var validEmail = validator.isEmail('email@email.com');
var inValidEmail = validator.isEmail('notemail@notemail');

describe("Validate Email", () => {
    it("should return true", () => {
        assert.strictEqual(validEmail, true);
    });
    it("should return false", () => {
        assert.strictEqual(inValidEmail, false);
    });
});
