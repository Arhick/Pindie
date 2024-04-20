const express = require("express");

const path = require("path");

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");
const core = require("./middlewares/core");

const PORT = 3000;
const app = express();

app.use(
  core,
  express.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});
