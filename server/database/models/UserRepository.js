const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
    constructor() {
        super({ table: "user"});
    }

    async read(id) {
        const [rows] = await this.database.query(
            `select * from ${this.table} where id = ?`,
      [id]
        );
        return rows[0];
    }

    async readAll() {
        const [rows] = await this.database.query(`select * from ${this.table}`);

        return rows;
    }
}

module.exports = UserRepository;