import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import CustomModal from "./CustomModal";

export default function MovieSelection({
  movies,
  handleSelectMovie,
  setMovies,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/movies/${id}`);
      setShowModal(false);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

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
            <button type="button" onClick={() => handleSelectMovie(movie)}>
              Edit{" "}
            </button>
            <button type="button" onClick={handleDeleteClick}>
              Delete
            </button>
            <CustomModal
              show={showModal}
              onClose={handleCloseModal}
              onConfirm={() => handleDeleteMovie(movie.id)}
              modalTitle="Movie removal confirmation"
              modalText="Are you sure you want to delete this movie ?"
            />
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
  handleSelectMovie: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
};
