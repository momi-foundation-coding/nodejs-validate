var validator = require("validator");

function validatePort(port) {
    var validPort = validator.isPort(port);
    return validPort;
}

exports = module.exports = validatePort;
