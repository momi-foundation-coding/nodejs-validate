var isAlpha = require("./validatealpha.ts");
var isAlphaNumeric = require("./validatealphanumeric.ts");
var isCreditCard = require("./validatecreditcard.ts");
var isCurrency = require("./validatecurrency.ts");
var isEmail = require("./validateemail.ts");
var isFloat = require("./validatefloat.ts");
var isHexColor = require("./validatehexcolor.ts");
var isInt = require("./validateint.ts");
var isIP = require("./validateip.ts");
var isISNB = require("./validateisnb.ts");
var isJSON = require("./validatejson.ts");
var isLowercase = require("./validatelowercase.ts");
var isMACAddress = require("./validatemacaddress.ts");
var isMobilePhone = require("./validatemobilephone.ts");
var isMongoID = require("./validatemongoid.ts");
var isNumeric = require("./validatenumeric.ts");
var isPort = require("./validateport.ts");
var isUppercase = require("./validateuppercase.ts");
var isURL = require("./validateurl.ts");
var isUUID = require("./validateuuid.ts");

var kemboijsValidator = {
    isAlpha,
    isAlphaNumeric,
    isCreditCard,
    isCurrency,
    isEmail,
    isFloat,
    isHexColor,
    isInt,
    isIP,
    isISNB,
    isJSON,
    isLowercase,
    isMACAddress,
    isMobilePhone,
    isMongoID,
    isNumeric,
    isPort,
    isUppercase,
    isURL,
    isUUID
}

exports = module.exports = kemboijsValidator;
