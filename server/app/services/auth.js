const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashPassword = async (req, res, next) => {
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 19 * 2 ** 10,
    timeCost: 2,
    parallelism: 1,
  };
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);
    req.body.hashedPassword = hashedPassword;
    delete req.body.password;
    next();
  } catch (err) {
    next(err);
  }
};

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;
    const token = await jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1d",
    });
    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { auth } = req.cookies;
    const decoded = await jwt.verify(auth, process.env.APP_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

const deleteToken = async (req, res, next) => {
  try {
    res.clearCookie("auth");
    res.status(200).send({ message: "Disconnected" });
  } catch (error) {
    next(error);
  }
};

const isConnected = async (req, res, next) => {
  try {
    if (req.user) {
      res.status(200).json({
        status: "success",
        data: {
          id: req.user.id,
          email: req.user.email,
          firstname: req.user.firstname,
          lastname: req.user.lastname,
        },
      });
    } else {
      res.status(401).json({
        status: "error",
        message: "Unauthorized",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  hashPassword,
  createToken,
  verifyToken,
  deleteToken,
  isConnected,
};
