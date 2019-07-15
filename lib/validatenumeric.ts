import validator from 'validator';

function validateNumeric(numeric: string) {
    var validNumeric = validator.isNumeric(numeric);
    return validNumeric;
}

export default validateNumeric;
