import { useContext } from "react";

import ReactPlayer from "react-player";

import PropTypes from "prop-types";

import "../styles/Moviedetails.css";
import WatchListButton from "./WatchListButton";
import AuthContext from "../contexts/AuthContext";

export default function MovieDetails({ modalRef, movie, revalidate }) {
  const { isAuthenticated } = useContext(AuthContext);
  const releaseDate = new Date(`${movie.date}`).getFullYear();

  const hours = Math.floor(`${movie.duration}` / 60);
  const mins = `${movie.duration}` - 60 * hours;

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <dialog className="dialog-details" ref={modalRef}>
      <ReactPlayer
        controls
        light
        url={movie.URL}
        width="100%"
        className="ReactPlayer"
      />
      {isAuthenticated ? (
        <WatchListButton movieId={movie.id} revalidate={revalidate} />
      ) : null}

      <h2>{movie.title}</h2>
      <section className="section-infos">
        <p>
          Duration : {hours} h {mins} minutes
        </p>
        <p> Release date : {releaseDate}</p>
        <p> Classification (PG) : - {movie.classification}</p>
      </section>
      <h3 className="detail-title"> Actors</h3>
      <section className="actor-list">
        <img
          src="https://images.pexels.com/photos/2227958/pexels-photo-2227958.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 1"
        />
        <img
          src="https://images.pexels.com/photos/7266014/pexels-photo-7266014.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 2"
        />
        <img
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 3"
        />
        <img
          src="https://images.pexels.com/photos/1764447/pexels-photo-1764447.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Actor 4"
        />
      </section>
      <section>
        <h3 className="detail-title"> Synopsis</h3>
        <p className="synopsis-movie">{movie.synopsis}</p>
      </section>
      <button type="button" onClick={closeModal} className="dialog-button">
        Close
      </button>
    </dialog>
  );
}

MovieDetails.propTypes = {
  modalRef: PropTypes.shape({
    current: PropTypes.shape({
      showModal: PropTypes.func,
      close: PropTypes.func,
    }),
  }).isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    classification: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
  revalidate: PropTypes.func.isRequired,
};
