var validator = require("validator");

function validateCurrency(currency) {
    var validCurrency = validator.isCurrency(currency);
    return validCurrency;
};

exports = module.exports = validateCurrency;
