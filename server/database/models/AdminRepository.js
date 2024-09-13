const AbstractRepository = require("./AbstractRepository");

class AdminRepository extends AbstractRepository {
    constructor() {
        super({ table: "admin" });
    }

    async readByEmailWithPassword(email) {
        const [rows] = await this.database.query(`select * from ${this.table} where email = ?`, [email])
        return rows[0];
    }
}

module.exports = AdminRepository;