import validator from 'validator';

function validateCurrency(currency: string) {
    var validCurrency = validator.isCurrency(currency);
    return validCurrency;
};

export default validateCurrency;
