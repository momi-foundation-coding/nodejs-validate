var validator = require("validator");

function validateUpperCase(uppercase) {
    var validUpperCase = validator.isUppercase(uppercase);
    return validUpperCase;
}

exports = module.exports = validateUpperCase;
