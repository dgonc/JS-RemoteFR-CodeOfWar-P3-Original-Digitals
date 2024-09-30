const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const movies = await tables.movie.readAll();

    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const movie = await tables.movie.read(req.params.id);
    if (movie == null) {
      res.sendStatus(404);
    } else {
      res.json(movie);
    }
  } catch (err) {
    next(err);
  }
};

const readByTitle = async (req, res, next) => {
  try {
    const movie = await tables.movie.searchByTitle(req.params.title);
    if (movie == null) {
      res.sendStatus(404);
    } else {
      res.json(movie);
    }
  } catch (err) {
    next(err);
  }
};

const readByCategories = async (req, res, next) => {
  try {
    const movies = await tables.movie.readAllWithCategories();

    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const movie = req.body;
  try {
    console.info("from add", req.body)
    const result = await tables.movie.uploadMovie(movie);

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
    next(err);
  }
};

const edit = async (req, res, next) => {
  const movie = { ...req.body, id: req.params.id };

  try {
    const result = await tables.movie.update(movie);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    await tables.movieCategory.deleteById(movieId);
    await tables.movie.delete(movieId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const browseFree = async (req, res, next) => {
  try {
    const freeMovies = await tables.movie.readFreeMovies();
    res.json(freeMovies);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  readByTitle,
  readByCategories,
  add,
  edit,
  browseFree,
  destroy,
};
