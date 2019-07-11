var validator = require("validator");

function validateMobilePhone(mobilePhone) {
    var validMobilePhone = validator.isMobilePhone(mobilePhone);
    return validMobilePhone;
}

exports = module.exports = validateMobilePhone;
