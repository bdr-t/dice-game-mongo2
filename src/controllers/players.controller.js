const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send({ user });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.body, req.params);
  res.status(httpStatus.OK).send({ user });
});

module.exports = {
  createUser,
  updateUser,
};
