const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const movies = await tables.movie.readAll();

    res.json(movies);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
