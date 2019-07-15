import validator from 'validator';

function validateJson(json: string) {
    var validJson = validator.isJSON(json);
    return validJson;
}

export default validateJson;
