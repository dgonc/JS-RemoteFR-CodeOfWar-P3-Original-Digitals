import PropTypes from "prop-types";
import ReactPlayer from "react-player";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id}>
      <ReactPlayer controls url={movie.URL} />
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
