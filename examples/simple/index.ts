import validator from 'nodejs-validate';

const validMail = validator.isEmail("kemboijs.org@gmail.com")
console.log('----->>>', validMail) // true;
