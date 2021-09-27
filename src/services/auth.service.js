const httpStatus = require('http-status');
const userService = require('./user.service');
const ApiError = require('../utils/ApiError');
const mongoose = require('mongoose');


/**
 * Login with username and password
 * @param {string} name
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithNameAndPassword = async (name, password) => {
  const user = await userService.getUserByName(name);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect name or password');
  }
  return user;
};

const loginUserWithNameAndPasswordAdmin = async (name, password) => {
  const admin = name === "admin" ? true : false
  if (!admin || !(password === 'password1')) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect name or password');
  }
  return {
    id: new mongoose.Types.ObjectId(),
    name: 'admin'
  };
}

module.exports = {
  loginUserWithNameAndPassword,
  loginUserWithNameAndPasswordAdmin
};
