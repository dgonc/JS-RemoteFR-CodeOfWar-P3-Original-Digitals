const AbstractRepository = require("./AbstractRepository");

class AdminRepository extends AbstractRepository {
  constructor() {
    super({ table: "admin" });
  }

  async create(admin) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, firstname, lastname) values (?, ?, ?, ?)`,
      [admin.email, admin.hashedPassword, admin.firstname, admin.lastname]
    );

    return result.values;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows[0];
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }
}

module.exports = AdminRepository;
