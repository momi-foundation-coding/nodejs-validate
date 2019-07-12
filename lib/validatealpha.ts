var validator = require("validator");

function validateAlpha(alpha) {
    var validAlpha = validator.isAlpha(alpha);
    return validAlpha;
}

exports = module.exports = validateAlpha;
