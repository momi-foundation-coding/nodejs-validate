var validator = require("validator");

function validateCurrency(currency: string) {
    var validCurrency = validator.isCurrency(currency);
    return validCurrency;
};

exports = module.exports = validateCurrency;
