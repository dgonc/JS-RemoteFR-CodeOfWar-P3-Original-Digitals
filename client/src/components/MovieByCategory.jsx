import PropTypes from 'prop-types';

function MovieByCategory({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
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