import validator from 'validator';

function validateMongoId(mongoId: string) {
    var validMongoId = validator.isMongoId(mongoId);
    return validMongoId;
}

export default validateMongoId;
