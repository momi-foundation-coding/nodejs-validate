var validator = require("validator");

function validateUpperCase(uppercase: string) {
    var validUpperCase = validator.isUppercase(uppercase);
    return validUpperCase;
}

exports = module.exports = validateUpperCase;
