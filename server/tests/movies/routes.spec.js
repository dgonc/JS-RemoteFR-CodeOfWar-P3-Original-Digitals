// Import required dependencies
const { app, request, database } = require("../config");

// Test suite for the GET /api/movies route
describe("GET /api/movies", () => {
  it("should fetch movies successfully", async () => {
    // Mock empty rows returned from the database
    const rows = [];

    jest.mock("../../app/services/auth", () => ({
      verifyToken: jest.fn((req, res, next) => next()),
    }));

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Send a GET request to the /api/movies endpoint
    const response = await request(app).get("/api/movies");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows);
  });
});

// Test suite for the GET /api/movies/:id route
describe("GET /api/movies/:id", () => {
  it("should fetch a single movie successfully", async () => {
    // Mock rows returned from the database
    const rows = [{}];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Send a GET request to the /api/items/:id endpoint
    const response = await request(app).get(`/api/movies/1`);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows[0]);
  });

  it("should return 404 for non-existent movie", async () => {
    // Mock empty rows returned from the database
    const rows = [];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Send a GET request to the /api/movies/:id endpoint with an invalid ID
    const response = await request(app).get("/api/movies/0");

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

// Test suite for the POST /api/movies route
// Doesn't pass: maybe something to change in app config :/
// Hint: enabling error log could help ;)
describe("POST /api/movies/add", () => {
  it("should add a new movie successfully", async () => {
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

    // Send a POST request to the /api/movies endpoint with a test movie
    const response = await request(app).post("/api/movies/add").send(fakeMovie);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toBe(result.insertId);
  });
});

// Test suite for the PUT /api/movies/:id route
describe("PUT /api/movies/:id", () => {
  it("should update a movie successfully", async () => {
    // Mock result of the database query
    const result = [{ affectedRows: 1 }];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [result]);

    // Fake movie data
    const fakeMovie = {
      title: "foo",
      duration: 100,
      synopsis: "fake movie test modif",
      date: "2025-01-12",
      classification: 12,
      picture: "fakeUrl/picture/movie",
      URL: "fakeUrl/movie",
    };

    // Send a PUT request to the /api/movies/:id endpoint with a test movie
    const response = await request(app).put("/api/movies/:id").send(fakeMovie);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.affectedRows).toBe(result.affectedRows);
  });
});

// Test suite for the DELETE /api/movies/:id route
describe("DELETE /api/movies/:id", () => {
  it("should delete a movie successfully", async () => {
    // Mock result of the database query
    const result = [{ affectedRows: 1 }];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [result]);

    // Fake movie data
    const fakeMovie = {
      id: 1,
    };

    // Send a DELETE request to the /api/movies/:id endpoint with a test movie
    const response = await request(app)
      .delete("/api/movies/:id")
      .send(fakeMovie);

    // Assertions
    expect(response.status).toBe(204);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.affectedRows).toBe(result.affectedRows);
  });
});
