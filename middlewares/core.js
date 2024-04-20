const allowedCore = [
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
  "localhost:3000",
];

function core(req, res, next) {
  const { origin } = req.headers;
  console.log(origin);
  if (allowedCore.includes(origin)) {
    res.headers("Access-Control-Allow-Origin", origin);
  }
  next();
}

module.exports = core;
