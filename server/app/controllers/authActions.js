const argon2 = require("argon2");
const tables = require("../../database/tables");

const verifyEmail = async (req, res, next) => {
  try {
    const admin = await tables.admin.readByEmailWithPassword(req.body.email);
    if (admin) {
      req.role = "admin";
      req.user = admin;
    } else {
      const user = await tables.user.readByEmailWithPassword(req.body.email);
      req.role = "user";
      req.user = user;
      if (user === null) {
        res.sendStatus(401);
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const { user } = req;
    const verified = await argon2.verify(user.password, req.body.password);

    if (verified) {
      delete user.password;
      req.user = user;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "login successfull",
      id: req.user.id,
      email: req.user.email,
      role: req.role,
    });
  } catch (error) {
    next(error);
  }
};

/* const verifyCredentials = async (tableName, email, password) => {
  const user = await tables[tableName].readByEmailWithPassword(email);
  if (user == null) {
    return null;
  }
  const verified = await argon2.verify(user.password, password);
  if (verified) {
    delete user.password;
    return user;
  }
  return null;
};

const auth = async (req, res, next) => {
  try {
    let user = await verifyCredentials(
      "admin",
      req.body.email,
      req.body.password
    );
    if (user === null) {
      user = await verifyCredentials("user", req.body.email, req.body.password);
    }
    if (user !== null) {
      req.user = user;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
}; */

module.exports = { verifyEmail, verifyPassword, login };
