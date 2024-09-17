import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

function MovieByCategory({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  );
}

MovieByCategory.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieByCategory;
