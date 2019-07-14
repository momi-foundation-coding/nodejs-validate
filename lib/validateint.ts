var validator = require("validator");

function validateInt(int: string) {
    var validInt = validator.isInt(int);
    return validInt;
}

exports = module.exports = validateInt;
