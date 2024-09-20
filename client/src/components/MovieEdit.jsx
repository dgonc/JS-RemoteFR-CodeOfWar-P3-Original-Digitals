import { useRef, useState } from "react";
import { getMoviesByTitle } from "../services/request";
import MovieFormEdit from "./MovieFormEdit";
import MovieSelection from "./MovieSelection";
import "../styles/Movieedit.css";

export default function MovieEdit() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);
  const modalRef = useRef(null);

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

  const handleSelectMovie = (movie) => {
    setSelectMovie(movie);
    modalRef.current.showModal();
  };

  const handleFormUpdate = (updateMovie) => {
    setSelectMovie(updateMovie);
  };

  return (
    <div>
      <section className="movie-edit-container">
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
      </section>

      <MovieSelection movies={movies} selectMovie={handleSelectMovie} />

      {selectMovie && (
        <section className="form-section">
          <MovieFormEdit
            movies={selectMovie}
            handleFormUpdate={handleFormUpdate}
          />
        </section>
      )}
    </div>
  );
}
