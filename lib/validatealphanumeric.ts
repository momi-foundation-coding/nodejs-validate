var validator = require("validator");

function validateAlphaNumeric(alphaNumeric) {
    var validAlphaNumeric = validator.isNumeric(alphaNumeric);
    return validAlphaNumeric;
}

exports = module.exports = validateAlphaNumeric;
