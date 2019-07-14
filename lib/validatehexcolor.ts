var validator = require("validator");

function validateHexColor(hexColor: string) {
    var validHexColor = validator.isHexColor(hexColor);
    return validHexColor;
}

exports = module.exports = validateHexColor;
