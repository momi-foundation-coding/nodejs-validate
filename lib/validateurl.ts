import validator from 'validator';

function validateUrl(url: string) {
    var validUrl = validator.isURL(url);
    return validUrl;
}

export default validateUrl;
