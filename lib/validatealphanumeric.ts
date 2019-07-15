import validator from 'validator';

function validateAlphaNumeric(alphaNumeric: string) {
    var validAlphaNumeric = validator.isAlphanumeric(alphaNumeric);
    return validAlphaNumeric;
}

export default validateAlphaNumeric;
