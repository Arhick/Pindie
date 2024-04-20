const gamesRouter = require("express").Router();

const {
  sendAllGames,
  sendUpadetedGames,
  addGame,
} = require("../controllers/games");
const {
  getAllGames,
  checkIsTitleInArray,
  updatedGamesArray,
  updatedGamesFile,
  findGameById,
  deleteGame,
} = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updatedGamesFile,
  sendUpadetedGames
);
gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updatedGamesArray,
  updatedGamesFile,
  addGame
);

module.exports = gamesRouter;
