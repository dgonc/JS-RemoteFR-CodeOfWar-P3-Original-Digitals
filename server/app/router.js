const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const movieActions = require("./controllers/movieActions");
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");
const categoryActions = require("./controllers/categoryActions");
const auth = require("./services/auth");
const middleware = require("./services/middleware");
const authAdminActions = require("./controllers/authAdminActions");
const watchlistActions = require("./controllers/watchlistActions");

// Public actions (no token necessary)
router.post(
  "/sign",
  middleware.verifyFields,
  auth.hashPassword,
  userActions.add
);
router.post(
  "/login",
  authActions.verifyEmail,
  authActions.verifyPassword,
  auth.createToken,
  authActions.login
);
router.get("/movies/free", movieActions.browseFree);

// all routes below require a token
router.use(auth.verifyToken);

// Movies routes for users
router.get("/movies", movieActions.browse);
router.get("/movies/categories", movieActions.readByCategories);
router.get("/movies/:id", movieActions.read);
router.get("/movies/search/:title", movieActions.readByTitle);
router.get("/categories", categoryActions.browse);
router.get("/categories/:id", categoryActions.read);
router.get("/watchlist", watchlistActions.read);
router.post("/watchlist", watchlistActions.add);
router.delete("/watchlist", watchlistActions.destroy);

// Movies routes for admins
router.post("/movies/add", middleware.uploadMovie, movieActions.add);
router.put("/movies/:id", movieActions.edit);
router.delete("/movies/:id", movieActions.destroy);

// routes for user related actions
router.get("/checkauth", auth.isConnected);
router.get("/users", userActions.browse);
router.get("/user", userActions.read);
router.put("/user", userActions.edit);
router.delete("/user", userActions.destroy);
router.get("/logout", auth.deleteToken);

// routes for admin related actions
router.get("/admins/checkauth", auth.isConnected);
router.get("/admins", authAdminActions.browseAdmin);
router.post(
  "/admins/sign",
  middleware.verifyFields,
  auth.hashPassword,
  authAdminActions.add
);

/* ************************************************************************* */

module.exports = router;
