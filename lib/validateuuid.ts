var validator = require("validator");

function validateUuid(uuid: string) {
    var validUuid = validator.isUUID(uuid);
    return validUuid;
}

exports = module.exports = validateUuid;
