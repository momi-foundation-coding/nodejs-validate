import validator from 'validator';

function validateFloat(float: string) {
    var validFloat = validator.isFloat(float);
    return validFloat;
}

export default validateFloat;
