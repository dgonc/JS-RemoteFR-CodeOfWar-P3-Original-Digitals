import PropTypes from "prop-types";

import "../styles/Moviecard.css";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="card">
      <div className="poster-container">
        <img
          src="https://images.affiches-et-posters.com//albums/3/4537/medium/affiche-film-inception-2352.jpg"
          alt={movie.title}
          className="poster"
        />
      </div>
      <h3 className="card-title">{movie.title}</h3>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.element.isRequired,
};
