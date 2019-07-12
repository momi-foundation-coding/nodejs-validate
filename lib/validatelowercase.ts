var validator = require("validator");

function validateLowerCase(lowercase) {
    var validLowerCase = validator.isLowercase(lowercase);
    return validLowerCase;
}

exports = module.exports = validateLowerCase;
