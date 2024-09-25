const tables = require("../../database/tables");

const read = async (req, res, next) => {
  try {
    const movies = await tables.watchlist.read(req.user.id);
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { movieId } = req.body;
  try {
    const affectedRows = await tables.watchlist.create(req.user.id, movieId);
    res.status(201).json({ affectedRows });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { movieId } = req.body;
  try {
    await tables.watchlist.delete(req.user.id, movieId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { read, add, destroy };
