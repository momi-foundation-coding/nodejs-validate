import validator from 'validator';

function validateUpperCase(uppercase: string) {
    var validUpperCase = validator.isUppercase(uppercase);
    return validUpperCase;
}

export default validateUpperCase;
