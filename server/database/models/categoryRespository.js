const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT category.id as category_id, category.type, movie.id as movie_id, movie.title, movie.picture
FROM
    movie
    INNER JOIN movie_category ON movie.id = movie_category.movie_id
    INNER JOIN category ON category.id = movie_category.category_id
WHERE
    category.id = ?
ORDER BY category.type`,
      [id]
    );
    return result;
  }
}
module.exports = CategoryRepository;
