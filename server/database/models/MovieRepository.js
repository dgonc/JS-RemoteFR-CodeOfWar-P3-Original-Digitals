const AbstractRepository = require("./AbstractRepository");

class MovieRepository extends AbstractRepository {
  constructor() {
    super({ table: "movie" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async readAllWithCategories() {
    const [rows] = await this.database.query(`SELECT
    category.id AS category_id,
    category.type,
    movie.id AS movie_id,
    movie.title,
    movie.URL,
    movie.classification,
    movie.date,
    movie.duration,
    movie.picture,
    movie.synopsis
FROM
    movie
    JOIN movie_category ON movie.id = movie_category.movie_id
    JOIN category ON movie_category.category_id = category.id
`);

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
      `insert into ${this.table} (title, duration, synopsis, date, classification, picture, URL, admin_id) values ( ?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        movie.title,
        movie.duration,
        movie.synopsis,
        movie.date,
        movie.classification,
        movie.picture,
        movie.URL,
      ]
    );
    return rows;
  }
}

module.exports = MovieRepository;
