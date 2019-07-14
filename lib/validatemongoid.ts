var validator = require("validator");

function validateMongoId(mongoId: string) {
    var validMongoId = validator.isMongoId(mongoId);
    return validMongoId;
}

exports = module.exports = validateMongoId;
