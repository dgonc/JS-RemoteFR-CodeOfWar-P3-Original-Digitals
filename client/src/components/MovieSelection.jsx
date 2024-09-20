import PropTypes from "prop-types";

export default function MovieSelection({ movies, selectMovie }) {
  return (
    <div className="movies-list-edit">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              className="movie-poster"
              src={movie.picture}
              alt={movie.title}
            />
            <h3 className="movie-title">{movie.title}</h3>
            <button type="button" onClick={() => selectMovie(movie)}>
              edit{" "}
            </button>
          </div>
        ))
      ) : (
        <p>Aucun film trouvé.</p>
      )}
    </div>
  );
}

MovieSelection.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectMovie: PropTypes.func.isRequired,
};
