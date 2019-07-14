var validator = require("validator");

function validateMacAddress(macAddress: string) {
    var validMacAddress = validator.isMACAddress(macAddress);
    return validMacAddress;
}

exports = module.exports = validateMacAddress;
