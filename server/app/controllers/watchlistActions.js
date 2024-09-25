const read = async (req, res, next) => {
  try {
    console.info("coucou depuis read");
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    console.info("coucou depuis add");
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    console.info("coucou depuis delete");
  } catch (err) {
    next(err);
  }
};

module.exports = { read, add, destroy };
