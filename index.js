const jwt = require("jsonwebtoken");

module.exports = {
  decode: require("./src/decode"),
  verify: require("./src/verify"),
  sign: require("./src/sign"),
  JsonWebTokenError: jwt.JsonWebTokenError,
  NotBeforeError: jwt.NotBeforeError,
  TokenExpiredError: jwt.TokenExpiredError
};
