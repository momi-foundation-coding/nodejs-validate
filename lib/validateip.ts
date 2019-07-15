import validator from 'validator';

function validateIp(ip: string) {
    var validIp = validator.isIP(ip);
    return validIp;
}

export default validateIp;
