import ReactPlayer from "react-player";

import PropTypes from "prop-types";

import "../styles/Moviedetails.css";

export default function MovieDetails({ modalRef, movie }) {
  const releaseDate = new Date(`${movie.date}`).getFullYear();

  const hours = Math.floor(`${movie.duration}` / 60);
  const mins = `${movie.duration}` - 60 * hours;

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <dialog className="dialog-details" ref={modalRef}>
      <ReactPlayer url={movie.URL} width={200} />
      <h2>{movie.title}</h2>
      <section className="section-infos">
        <p>
          {hours} H {mins} mins
        </p>
        <p>{releaseDate}</p>
        <p>-{movie.classification}</p>
      </section>
      <p className="synopsis-movie">{movie.synopsis}</p>

      <button type="button" onClick={closeModal}>
        close
      </button>
    </dialog>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.element.isRequired,
  modalRef: PropTypes.element.isRequired,
};
