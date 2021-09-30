const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
// const playGame = require('../utils/playGame');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send({ user });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.body, req.params);
  res.status(httpStatus.OK).send({ user });
});

const createGame = catchAsync(async (req, res) => {
  // const game = playGame();
  res.status(httpStatus.OK).send({
    dice1: 2,
    dice2: 5,
    succes_rate: 0,
    result: 'You win',
  });
});

module.exports = {
  createUser,
  updateUser,
  createGame,
};
