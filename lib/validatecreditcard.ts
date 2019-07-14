var validator = require("validator");

function validateCreditCard(creditCard: string) {
    var validCreditCard = validator.isCreditCard(creditCard);
    return validCreditCard;
}

exports = module.exports = validateCreditCard;
