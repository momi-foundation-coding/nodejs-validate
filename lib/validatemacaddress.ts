import validator from 'validator';

function validateMacAddress(macAddress: string) {
    var validMacAddress = validator.isMACAddress(macAddress);
    return validMacAddress;
}

export default validateMacAddress;
