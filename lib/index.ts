var isApha = require("./validatealpha");
var isAphaNumeric = require("./validatealphanumeric");
var isCreditCard = require("./validatecreditcard");
var isCurrency = require("./validatecurrency");
var isEmail = require("./validateemail");
var isFloat = require("./validatefloat");
var isHexColor = require("./validatehexcolor");
var isInt = require("./validateint");
var isIP = require("./validateip");
var isISNB = require("./validateisnb");
var isJson = require("./validatejson");
var isLowerCase = require("./validatelowercase");
var isMACAddress = require("./validatemacaddress");
var isMobilePhone = require("./validatemobilephone");
var isMongoID = require("./validatemongoid");
var isNumeric = require("./validatenumeric");
var isPort = require("./validateport");
var isUppercase = require("./validateuppercase");
var isURL = require("./validateurl");
var isUUID = require("./validateuuid");

var kemboijsValidator = {
    isApha,
    isAphaNumeric,
    isCreditCard,
    isCurrency,
    isEmail,
    isFloat,
    isHexColor,
    isInt,
    isIP,
    isISNB,
    isJson,
    isLowerCase,
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
