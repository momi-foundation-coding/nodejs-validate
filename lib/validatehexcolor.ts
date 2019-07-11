var validator = require("validator");

function validateHexColor(hexColor) {
    var validHexColor = validator.isHexColor(hexColor);
    return validHexColor;
}

exports = module.exports = validateHexColor;
