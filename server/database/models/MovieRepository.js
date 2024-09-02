const AbstractRepository = require("./AbstractRepository");

class MovieRepository extends AbstractRepository {
  constructor() {
    super({ table: "movie" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = MovieRepository;
