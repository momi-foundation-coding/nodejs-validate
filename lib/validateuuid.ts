import validator from 'validator';

function validateUuid(uuid: string) {
    var validUuid = validator.isUUID(uuid);
    return validUuid;
}

export default validateUuid;
