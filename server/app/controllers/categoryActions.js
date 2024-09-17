const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const movies = await tables.category.read(req.params.id);
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
