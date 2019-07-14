var validator = require("validator");

function validateFloat(float: string) {
    var validFloat = validator.isFloat(float);
    return validFloat;
}

exports = module.exports = validateFloat;
