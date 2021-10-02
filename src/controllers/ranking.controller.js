const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { rankingService } = require('../services');
const formatRanking = require('../utils/formatRanking');

const getAllUsers = catchAsync(async (req, res) => {
  const users = await rankingService.getAllUsers();
  const formatedRankings = formatRanking(users);

  res.status(httpStatus.OK).send({ users: formatedRankings });
});

module.exports = {
  getAllUsers,
};
