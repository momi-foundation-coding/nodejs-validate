import assert from "assert";
import validateResult from '../lib/checks/validateresult';

var validResult = validateResult({
    valid: true,
    message: "Successfully"
});

var invalidResult = validateResult({
    valid: false,
    message: "Message only"
});

describe("Validate Result", () => {
    it("should return true", () => {
        assert.strictEqual(validResult, true);
    });
    it("should return false", () => {
        assert.strictEqual(invalidResult, false);
    });
});
