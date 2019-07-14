var validator = require("validator");

function validateNumeric(numeric: string) {
    var validNumeric = validator.isNumeric(numeric);
    return validNumeric;
}

exports = module.exports = validateNumeric;
