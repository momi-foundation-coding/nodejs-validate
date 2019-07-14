var validator = require("validator");

function validateIsnb(isnb: string) {
    var validIsnb = validator.isISBN(isnb);
    return validIsnb;
}

exports = module.exports = validateIsnb;
