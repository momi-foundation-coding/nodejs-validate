import validator from 'validator';

function validateMobilePhone(mobilePhone: string, locale) {
    var validMobilePhone = validator.isMobilePhone(mobilePhone, locale);
    return validMobilePhone;
}

export default validateMobilePhone;
