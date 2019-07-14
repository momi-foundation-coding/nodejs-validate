var validator = require("validator");

function validatePort(port: string) {
    var validPort = validator.isPort(port);
    return validPort;
}

exports = module.exports = validatePort;
