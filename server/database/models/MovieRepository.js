const AbstractRepository = require("./AbstractRepository");

class MovieRepository extends AbstractRepository {
  constructor() {
    super({ table: "movie" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async searchByTitle(title) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where title like ?`,
      [`%${title}%`]
    );
    return rows;
  }

  async uploadMovie(movie) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (title, duration, synopsis, date, classification, picture, URL, admin_id) values ( ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        movie.title,
        movie.duration,
        movie.synopsis,
        movie.date,
        movie.classification,
        movie.picture,
        movie.URL,
        movie.admin_id,
      ]
    );
    return rows;
  }
}

module.exports = MovieRepository;
