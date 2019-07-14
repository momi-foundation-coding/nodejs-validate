var validator = require("validator");

function validateIp(ip: string) {
    var validIp = validator.isIP(ip);
    return validIp;
}

exports = module.exports = validateIp;
