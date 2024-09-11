const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const itemActions = require("./controllers/itemActions");
const movieActions = require("./controllers/movieActions");
const userActions = require("./controllers/userActions");
const authActions = require("./controllers/authActions");

const { hashPassword } = require("./services/auth");
const { verifyFields } = require("./services/middleware");

// Route to get a list of items
router.get("/items", itemActions.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemActions.read);

// Route to add a new item
router.post("/items", itemActions.add);

// route to get a list of movies
router.get("/movies", movieActions.browse);
router.get("/movies/:id", movieActions.read);

// route to get a list of users
router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/sign", verifyFields, hashPassword, userActions.add);
router.post("/login", authActions.login);


/* ************************************************************************* */

module.exports = router;
