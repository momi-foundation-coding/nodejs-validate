var validator = require("validator");

function validateJson(json) {
    var validJson = validator.isJson(json);
    return validJson;
}

exports = module.exports = validateJson;
