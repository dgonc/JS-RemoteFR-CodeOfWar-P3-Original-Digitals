const AbstractRepository = require("./AbstractRepository");

class WatchlistRepository extends AbstractRepository {
  constructor() {
    super({ table: "watchlist" });
  }

  async read(userId) {
    const [rows] = await this.database.query(
      `select movie.* from movie join ${this.table} on movie.id = watchlist.movie_id where watchlist.user_id = ?`,
      [userId]
    );
    return rows;
  }

  async create(userId, movieId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, movie_id) values (?, ?)`,
      [userId, movieId]
    );
    return result.affectedRows;
  }

  async delete(userId, movieId) {
    const [result] = await this.database.query(
      `delete from ${this.table} where user_id = ? and movie_id = ?`,
      [userId, movieId]
    );
    return result.affectedRows;
  }
}

module.exports = WatchlistRepository;
