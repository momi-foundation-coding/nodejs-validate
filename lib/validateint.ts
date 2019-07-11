var validator = require("validator");

function validateInt(int) {
    var validInt = validator.isInt(int);
    return validInt;
}

exports = module.exports = validateInt;
