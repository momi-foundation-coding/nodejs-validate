[![Build Status](https://travis-ci.org/kemboijs/nodejs-validate.svg?branch=master)](https://travis-ci.org/kemboijs/nodejs-validate)
[![Maintainability](https://api.codeclimate.com/v1/badges/053e219b1afab73b20ae/maintainability)](https://codeclimate.com/github/kemboijs/nodejs-validate/maintainability)
![npm](https://img.shields.io/npm/dm/nodejs-validate)
![npm](https://img.shields.io/npm/v/nodejs-validate?color=blue)
[![Coverage Status](https://coveralls.io/repos/github/kemboijs/nodejs-validate/badge.svg?branch=master)](https://coveralls.io/github/kemboijs/nodejs-validate?branch=master)

# NodeJs Validate

This is a validation middleware for Nodejs application and API including validations when using frameworks such as [kemboijs](https://kemboijs.github.io/kemboijs.org). It can be used to validate request or sanitize them. Note that, this validator makes use of validator.js.

# How to Install and Usage 

- `npm install nodejs-validate`

# Examples 

```javascript 
  var validator = require("nodejs-validate");
  var validEmail = validator.isEmail("example@example.com");
  var invalidEmail = validator.isEmail("notvalida@invalid");
```

# Usage in Express Middlware

```javascript
const validator = require('nodejs-validate')

class ExampleMiddleware {
  static async userMiddleware(req, res, next) {
    const { email, username, phoneNumber } = req.body;
    const isEmail = validator.isEmail(email);
    if(!isEmail) {
      res.status(400).send({
        message: "Invalid email provided"
      })
    }
    next();
  }
}
```

# How To Contribute

In general, we follow the "fork-and-pull" Git workflow.

1. Fork this [repo](https://github.com/kemboijs/nodejs-validate.git) on GitHub
2. Clone the forked repo locally
3. Work on your fork
   - Make your changes and additions
   - Change or add tests if needed
   - Add changes to README.md if needed
4. Commit changes to your own branch
5. Make sure you merge the latest from "upstream" and resolve conflicts if there is any
6. Push your work back up to your fork
7. Submit a Pull request so that we can review your changes

# Contributors

<a href="https://github.com/kemboijs/nodejs-validate/graphs/contributors">
  <img src="https://contributors-img.firebaseapp.com/image?repo=kemboijs/nodejs-validate" width="200"/>
</a>

# License

[MIT](https://github.com/kemboijs/nodejs-validate/blob/master/LICENSE)
