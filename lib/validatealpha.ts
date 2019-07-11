var validator = require("validator");

function validateAlpha(alpha) {
    var validAlpha = validator.isApha(alpha);
    return validAlpha;
}

exports = module.exports = validateAlpha;
