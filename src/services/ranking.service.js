const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

const getAllUsers = async () => {
  return User.find({ name: { $ne: 'admin' } }).sort({ succes_rate: -1 });
};

const getUserByName = async (name) => {
  const user = await User.findOne({ name });
  if (!user) throw new ApiError(httpStatus.BAD_REQUEST, "Name dosen't exsist");
  return user;
};

module.exports = {
  getAllUsers,
  getUserByName,
};
