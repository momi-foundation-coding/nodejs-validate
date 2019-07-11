var validator = require("validator");

function validateFloat(float) {
    var validFloat = validator.isFloat(float);
    return validFloat;
}

exports = module.exports = validateFloat;
