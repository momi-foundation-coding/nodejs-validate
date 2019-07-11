var validator = require("validator");

function validateIsnb(isnb) {
    var validIsnb = validator.isISNB(isnb);
    return validIsnb;
}

exports = module.exports = validateIsnb;
