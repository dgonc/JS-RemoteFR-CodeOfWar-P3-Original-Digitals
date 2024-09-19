const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const movieActions = require("./controllers/movieActions");
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");
const categoryActions = require("./controllers/categoryActions");
const auth = require("./services/auth");
const middleware = require("./services/middleware");
const authAdminActions = require("./controllers/authAdminActions");

// route to get a list of movies
router.get("/movies", movieActions.browse);
router.get("/movies/categories", movieActions.readByCategories);
router.get("/movies/:id", movieActions.read);
router.get("/movies/search/:title", movieActions.readByTitle);
router.post("/movies/add", movieActions.add);
router.put("/movies/:id", movieActions.edit);

// route to get a list of categories
router.get("/categories", categoryActions.browse);
router.get("/categories/:id", categoryActions.read);

// routes for user related actions
router.get("/checkauth", auth.verifyToken, auth.isConnected);
router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
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

// routes for admin related actions
router.get("/admins/checkauth", auth.verifyToken, auth.isConnected);
router.get("/admins", authAdminActions.browseAdmin);
router.post(
  "/admins/sign",
  middleware.verifyFields,
  auth.hashPassword,
  authAdminActions.add
);

/* ************************************************************************* */

module.exports = router;
