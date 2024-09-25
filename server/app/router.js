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

// Public actions (no token necessary)
router.post("/sign", middleware.verifyFields, auth.hashPassword, userActions.add);
router.post("/login", authActions.verifyEmail, authActions.verifyPassword, auth.createToken, authActions.login);

// Movies routes for users
router.get("/movies", auth.verifyToken, movieActions.browse);
router.get("/movies/categories", auth.verifyToken, movieActions.readByCategories);
router.get("/movies/:id", auth.verifyToken, movieActions.read);
router.get("/movies/search/:title", auth.verifyToken, movieActions.readByTitle);
router.get("/categories", auth.verifyToken, categoryActions.browse);
router.get("/categories/:id", auth.verifyToken, categoryActions.read);

// Movies routes for admins
router.post("/movies/add", movieActions.add);
router.put("/movies/:id", movieActions.edit);

// Routes for user-related actions
router.get("/checkauth", auth.verifyToken, auth.isConnected);
router.get("/users", userActions.browse);
router.get("/user/:id", userActions.read);
router.put("/user/:id", userActions.edit);
router.delete("/user/:id", userActions.destroy);

router.get("/logout", auth.deleteToken);

// routes for admin related actions
router.get("/admins/checkauth", auth.verifyToken, auth.isConnected);
router.get("/admins", authAdminActions.browseAdmin);
router.post("/admins/sign", middleware.verifyFields, auth.hashPassword, authAdminActions.add);

/* ************************************************************************* */

module.exports = router;
