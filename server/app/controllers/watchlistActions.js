const tables = require("../../database/tables");

const read = async (req, res, next) => {
  try {
    const movies = await tables.watchlist.read(req.params.userId);
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { userId, movieId } = req.body;
  try {
    const affectedRows = await tables.watchlist.create(userId, movieId);
    res.status(201).json({ affectedRows });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  const { userId, movieId } = req.body;
  try {
    await tables.watchlist.delete(userId, movieId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { read, add, destroy };
