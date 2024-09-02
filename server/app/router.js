const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const itemActions = require("./controllers/itemActions");
const movieActions = require("./controllers/movieActions");

// Route to get a list of items
router.get("/items", itemActions.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemActions.read);

// Route to add a new item
router.post("/items", itemActions.add);

// route to get a list of movies
router.get("/movies", movieActions.browse);

/* ************************************************************************* */

module.exports = router;
