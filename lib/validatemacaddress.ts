var validator = require("validator");

function validateMacAddress(macAddress) {
    var validMacAddress = validator.isMACAddress(macAddress);
    return validMacAddress;
}

exports = module.exports = validateMacAddress;
