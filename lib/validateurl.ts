var validator = require("validator");

function validateUrl(url) {
    var validUrl = validator.isURL(url);
    return validUrl;
}

exports = module.exports = validateUrl;
