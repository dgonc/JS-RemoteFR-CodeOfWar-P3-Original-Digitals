// Import required dependencies
const { database, tables } = require("../config");

// Import repository classes
const AbstractRepository = require("../../database/models/AbstractRepository");
const MovieRepository = require("../../database/models/MovieRepository");

// Test suite for MovieRepository
describe("MovieRepository", () => {
  // Test: Check if MovieRepository extends AbstractRepository
  test("MovieRepository extends AbstractRepository", async () => {
    // Assertions
    expect(Object.getPrototypeOf(MovieRepository)).toBe(AbstractRepository);
  });

  // Test: Check if tables.movie is an instance of MovieRepository
  test("tables.movie = new MovieRepository", async () => {
    // Assertions
    expect(tables.movie instanceof MovieRepository).toBe(true);
  });

  // Test: Check if create method inserts data into the 'movie' table
  test("create => insert into", async () => {
    // Mock result of the database query
    const result = [{ insertId: 1 }];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [result]);

    // Fake movie data
    const fakeMovie = {
      title: "foo",
      duration: 100,
      synopsis: "fake movie test",
      date: "2025-01-13",
      classification: 12,
      picture: "fakeUrl/picture/movie",
      URL: "fakeUrl/movie",
    };

    // Call the create method of the movie repository
    const returned = await tables.movie.uploadMovie(fakeMovie);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "insert into movie (title, duration, synopsis, date, classification, picture, URL, admin_id) values ( ?, ?, ?, ?, ?, ?, ?, 1)",
      [
        fakeMovie.title,
        fakeMovie.duration,
        fakeMovie.synopsis,
        fakeMovie.date,
        fakeMovie.classification,
        fakeMovie.picture,
        fakeMovie.URL,
      ]
    );
    expect(returned).toBe(result);
  });

  // Test: Check if update method update a data from the 'movie' table
  test("update => update with id", async () => {
    // Mock result od the database
    const result = [{ affectedRows: 1 }];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [result]);

    // Fake movie update data
    const fakeMovie = {
      title: "foo update",
      duration: 150,
      synopsis: "fake movie update test",
      date: "1985-01-13",
      classification: 18,
      picture: "fakeUrl/picture/movieUpdate",
      URL: "fakeUrl/movieUpdate",
    };

    // Call the update methode of the movie repository
    const returned = await tables.movie.update(fakeMovie);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      `update movie set title = ?, duration = ?, synopsis = ?, date = ?, classification = ?, picture = ?, URL = ? where id = ?`,
      [
        fakeMovie.title,
        fakeMovie.duration,
        fakeMovie.synopsis,
        fakeMovie.date,
        fakeMovie.classification,
        fakeMovie.picture,
        fakeMovie.URL,
        fakeMovie.id,
      ]
    );
    expect(returned).toBe(result);
  });

  // Test: Check if readAll method selects all data from the 'movie' table
  test("readAll => select", async () => {
    // Mock empty rows returned from the database
    const rows = [];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Call the readAll method of the movie repository
    const returned = await tables.movie.readAll();

    // Assertions
    expect(database.query).toHaveBeenCalledWith("select * from movie");
    expect(returned).toStrictEqual(rows);
  });

  // Test: Check if read method selects data from the 'movie' table based on id
  test("read => select with id", async () => {
    // Mock rows returned from the database
    const rows = [{}];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Call the read method of the movie repository
    const returned = await tables.movie.read(0);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "select * from movie where id = ?",
      [0]
    );
    expect(returned).toStrictEqual(rows[0]);
  });

  // Test: Check if the delete method delete data from the 'movie' table
  test("delete => delete with id", async () => {
    // Mock result returned from the database
    const result = [{ affectedRows: 1 }];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [result]);

    // Fake movie to delete
    const fakeMovie = {
      id: 1,
    };
    // Call the delete method of the movie repository
    const returned = await tables.movie.delete(fakeMovie.id);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      `delete from movie where id = ?`,
      [fakeMovie.id]
    );
    expect(returned).toBe(result.affectedRows);
  });
});
