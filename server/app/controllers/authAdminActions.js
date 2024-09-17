const argon2 = require("argon2");
const tables = require("../../database/tables");

const browseAdmin = async (req, res, next) => {
  try {
    const admins = await tables.admin.readAll();
    res.json(admins);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const admin = req.body;

  try {
    const admins = await tables.admin.create(admin);
    res.status(201).json({ admins });
  } catch (error) {
    next(error);
  }
};

const verifyEmailPasswordAdmin = async (req, res, next) => {
  try {
    const admin = await tables.admin.readByEmailWithPassword(req.body.email);
    console.info(admin);
    if (admin == null) {
      res.sendStatus(401);
    }

    const verified = await argon2.verify(admin.password, req.body.password);

    if (verified) {
      delete admin.password;
      req.admin = admin;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Login successfull",
      id: req.admin.id,
      email: req.admin.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { browseAdmin, add, verifyEmailPasswordAdmin, loginAdmin };
