var validator = require("validator");

function validateUpperCase(uppercase) {
    var validUpperCase = validator.isUpperCase(uppercase);
    return validUpperCase;
}

exports = module.exports = validateUpperCase;
