const argon2 = require("argon2");
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    if (user == null) {
      res.sendStatus(401);
    }

    const verified = await argon2.verify(user.password, req.body.password);
    
    if (verified) {
        delete user.password;
        res.json(user);
    } else {
        res.sendStatus(401)
    }
    
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
