import PropTypes from "prop-types";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <div>
        {movie.duration} mins, -{movie.classification} ans
      </div>
      <p>{movie.synopsis}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.element.isRequired,
};
