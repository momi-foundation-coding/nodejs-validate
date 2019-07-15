import validator from 'validator';

function validatePort(port: string) {
    var validPort = validator.isPort(port);
    return validPort;
}

export default validatePort;
