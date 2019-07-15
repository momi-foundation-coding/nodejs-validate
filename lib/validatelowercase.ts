import validator from 'validator';

function validateLowerCase(lowercase: string) {
    var validLowerCase = validator.isLowercase(lowercase);
    return validLowerCase;
}

export default validateLowerCase;
