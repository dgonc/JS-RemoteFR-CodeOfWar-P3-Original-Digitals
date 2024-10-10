const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.user.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;

  try {
    const affectedRows = await tables.user.create(user);
    if (affectedRows) {
      res.status(201).json({ affectedRows });
    } else {
      res.status(401);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.user.id };

  try {
    await tables.user.update(user);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.user.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, add, edit, destroy };
