const moment = require('moment');
const config = require('../../src/config/config');
const { tokenTypes } = require('../../src/config/tokens');
const tokenService = require('../../src/services/token.service');
const { userOne, userTwo } = require('./user.fixture');
const { Token } = require('../../src/models');

const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
const userOneAccessToken = tokenService.generateToken(userOne._id, accessTokenExpires, tokenTypes.ACCESS);
const userTwoAccesToken = tokenService.generateToken(userTwo._id, accessTokenExpires, tokenTypes.ACCESS);

const insertToken = async () => {
  await Token.create({
    token: userOneAccessToken,
    user: userOne._id,
    expires: accessTokenExpires,
    type: 'refresh',
    blacklisted: false,
  });
};

module.exports = {
  userOneAccessToken,
  userTwoAccesToken,
  insertToken,
};
