import { useState } from "react";
import { getMoviesByTitle } from "../services/request";
import MovieFormEdit from "./MovieFormEdit";

import "../styles/Movieedit.css";

export default function MovieEdit() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchButton = async () => {
    if (search.length > 0) {
      const results = await getMoviesByTitle({ params: { title: search } });
      setMovies(results);
    } else {
      setMovies([]);
    }
  };

  return (
    <div>
      <section className="movie-edit-container">
        <div className="movie-edit-search">
          <input
            className="search-input"
            type="text"
            placeholder="Search for a movie..."
            onChange={handleSearch}
          />
          <button
            className="search-button"
            onClick={handleSearchButton}
            type="button"
          >
            Search
          </button>
        </div>

        <div className="movies-list">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  className="movie-poster"
                  src={movie.picture}
                  alt={movie.title}
                />
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            ))
          ) : (
            <p>Aucun film trouvé.</p>
          )}
        </div>
      </section>
      <section>
        <MovieFormEdit movies={movies} />
      </section>
    </div>
  );
}
