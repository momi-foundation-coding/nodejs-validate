var validator = require("validator");

function validateLowerCase(lowercase: string) {
    var validLowerCase = validator.isLowercase(lowercase);
    return validLowerCase;
}

exports = module.exports = validateLowerCase;
