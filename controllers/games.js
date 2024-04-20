const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const sendUpadetedGames = async (req, res) => {
  res.send({
    games: req.games,
    updated: req.game,
  });
};

const addGame = async (req, res) => {
  res.send({
    games: req.games, // Обновлённый список со всеми играми
    updated: req.updatedObject, // Новая добавленная игра
  });
};

module.exports = {
  sendAllGames,
  sendUpadetedGames,
  addGame,
};
