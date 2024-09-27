const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const path = require("path");

const verifyFields = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
  });
  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const id = uuidv4();
    const movieName = `${id}${path.extname(file.originalname)}`;
    req.body.movie.title = movieName;
    cb(null, movieName);
  },
});

const uploadMovie = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("movie")(req, res, next);
};

module.exports = { verifyFields, uploadMovie };