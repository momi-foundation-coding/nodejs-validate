import validator from 'validator';

function validateCreditCard(creditCard: string) {
    var validCreditCard = validator.isCreditCard(creditCard);
    return validCreditCard;
}

export default validateCreditCard;
