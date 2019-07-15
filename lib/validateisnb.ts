import validator from 'validator';

function validateIsnb(isnb: string) {
    var validIsnb = validator.isISBN(isnb);
    return validIsnb;
}

export default validateIsnb;
