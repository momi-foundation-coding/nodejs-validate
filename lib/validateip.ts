var validator = require("validator");

function validateIp(ip) {
    var validIp = validator.isIP(ip);
    return validIp;
}

exports = module.exports = validateIp;
