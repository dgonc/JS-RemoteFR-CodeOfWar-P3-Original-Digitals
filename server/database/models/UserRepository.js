const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
    constructor() {
        super({ table: "user"});
    }

    async readAll() {
        const [rows] = await this.database.query(`select * from ${this.table}`);

        return rows;
    }
}

module.exports = UserRepository;