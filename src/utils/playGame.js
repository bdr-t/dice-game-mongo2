const playGame = () => {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  return {
    dice1,
    dice2,
    result: dice1 + dice2 === 7 ? 1 : 0,
  };
};

module.exports = {
  playGame,
};
