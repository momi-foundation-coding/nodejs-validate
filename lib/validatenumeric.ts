var validator = require("validator");

function validateNumeric(numeric) {
    var validNumeric = validator.isNumeric(numeric);
    return validNumeric;
}

exports = module.exports = validateNumeric;
