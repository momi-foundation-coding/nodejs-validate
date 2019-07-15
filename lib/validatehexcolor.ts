import validator from 'validator';

function validateHexColor(hexColor: string) {
    var validHexColor = validator.isHexColor(hexColor);
    return validHexColor;
}

export default validateHexColor;
