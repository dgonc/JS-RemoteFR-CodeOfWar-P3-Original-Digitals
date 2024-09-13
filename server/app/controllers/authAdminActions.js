// const argon2 = require("argon2");
// const tables = require("../../database/tables");

const loginAdmin = async (req, res, next) => {
    try {
        console.info("coucou");
    } catch (error) {
        next(error);
    }
};

module.exports = { loginAdmin };