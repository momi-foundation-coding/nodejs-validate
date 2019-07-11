var validator = require("validator");

function validateLowerCase(lowercase) {
    var validLowerCase = validator.isLowerCase(lowercase);
    return validLowerCase;
}

exports = module.exports = validateLowerCase;
