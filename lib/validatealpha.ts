import validator from 'validator';

function validateAlpha(alpha: string) {
    var validAlpha = validator.isAlpha(alpha);
    return validAlpha;
}

export default validateAlpha;
