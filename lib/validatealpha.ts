var validator = require("validator");

function validateAlpha(alpha: string) {
    var validAlpha = validator.isAlpha(alpha);
    return validAlpha;
}

exports = module.exports = validateAlpha;
