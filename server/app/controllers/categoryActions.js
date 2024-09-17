const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();

    console.info(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
