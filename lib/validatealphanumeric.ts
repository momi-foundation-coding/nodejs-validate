var validator = require("validator");

function validateAlphaNumeric(alphaNumeric) {
    var validAlphaNumeric = validator.isAlphanumeric(alphaNumeric);
    return validAlphaNumeric;
}

exports = module.exports = validateAlphaNumeric;
