const argon2 = require("argon2");
const tables = require("../../database/tables");

const checkIfAdmin = async (req, res, next) => {
  try {
    const admin = await tables.admin.readByEmailWithPassword(req.body.email);
    if (admin) {
      req.role = "admin";
      const verified = await argon2.verify(admin.password, req.body.password);
      if (verified) {
        delete admin.password;
        req.user = admin;
        next();
      } else {
        res.sendStatus(401);
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

const verifyEmailPassword = async (req, res, next) => {
  try {
    if (req.role === "admin") {
      next();
    } else {
      const user = await tables.user.readByEmailWithPassword(req.body.email);
      if (user === null) {
        res.sendStatus(401);
      }
      const verified = await argon2.verify(user.password, req.body.password);

      if (verified) {
        delete user.password;
        req.user = user;
        req.role = "user";
        next();
      } else {
        res.sendStatus(401);
      }
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

module.exports = { verifyEmailPassword, login, checkIfAdmin };
