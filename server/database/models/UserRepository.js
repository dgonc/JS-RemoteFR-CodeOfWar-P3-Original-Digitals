const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
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

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, firstname, lastname) values (?, ?, ?, ?)`,
      [user.email, user.hashedPassword, user.firstname, user.lastname]
    );

    return result.insertId;
  }

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ? where id = ?`,
      [user.firstname, user.lastname, user.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = UserRepository;
