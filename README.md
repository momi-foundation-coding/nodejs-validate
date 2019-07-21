[![Build Status](https://travis-ci.org/kemboijs/kemboijs-validator.svg?branch=master)](https://travis-ci.org/kemboijs/kemboijs-validator)
[![Maintainability](https://api.codeclimate.com/v1/badges/f527634ef1f39b791153/maintainability)](https://codeclimate.com/github/kemboijs/kemboijs-validator/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/kemboijs/kemboijs-validator/badge.svg?branch=master)](https://coveralls.io/github/kemboijs/kemboijs-validator?branch=master)

# Kemboijs Validator

This is a validation middleware for Nodejs application and API including validations when using frameworks such as [kemboijs](https://kemboijs.github.io/kemboijs.org). It can be used to validate request or sanitize them. Note that, this validator makes use of validator.js.

# How to Install and Usage 

- `npm install kemboijs-validator`

# Examples 

```javascript 
    var validator = require("kemboijs-validator");
    var validEmail = validator.isEmail("example@example.com");
    var invalidEmail = validator.isEmail("notvalida@invalid");
```

# Contributors

- Ezrqn Kemboi
