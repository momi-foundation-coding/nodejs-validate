import validator from 'validator';

function validateInt(int: string) {
    var validInt = validator.isInt(int);
    return validInt;
}

export default validateInt;
