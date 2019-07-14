var validator = require("validator");

function validateMobilePhone(mobilePhone: string) {
    var validMobilePhone = validator.isMobilePhone(mobilePhone);
    return validMobilePhone;
}

exports = module.exports = validateMobilePhone;
