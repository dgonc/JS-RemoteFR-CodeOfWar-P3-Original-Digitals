// const argon2 = require("argon2");
const tables = require("../../database/tables");

const loginAdmin = async (req, res, next) => {
    try {
        const admins = await tables.admin.readAll();
        res.json(admins);
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {

    const admin = req.body;

    try {
        const admins = await tables.admin.create(admin);
        res.status(201).json({ admins });
    } catch (error) {
        next(error);
    }
};

module.exports = { loginAdmin, add };