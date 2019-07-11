var validator = require("validator");

function validateCreditCard(creditCard) {
    var creditCard = validator.isCreditCard(creditCard);
    return creditCard;
}

exports = module.exports = validateCreditCard;
