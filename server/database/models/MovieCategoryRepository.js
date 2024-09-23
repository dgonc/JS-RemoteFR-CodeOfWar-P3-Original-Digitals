const AbstractRepository = require("./AbstractRepository");

class MovieCategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "movie_category" });
  }

  async deleteById(movieId) {
    const [result] = await this.database.query(
      `delete from ${this.table} where movie_id = ?`,
      [movieId]
    );
    return result.affectedRows;
  }
}
module.exports = MovieCategoryRepository;
