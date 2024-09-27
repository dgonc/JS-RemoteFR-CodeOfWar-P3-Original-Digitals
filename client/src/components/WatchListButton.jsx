import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import myAxios from "../services/myAxios";

import { getWatchlist } from "../services/request";

import WatchlistAdd from "../assets/images/watchlist.svg";
import WatchlistAdded from "../assets/images/watchlisted.svg";

export default function WatchListButton({ movieId, revalidate }) {
  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    const checkWatchlist = async () => {
      try {
        const userWatchlist = await getWatchlist();
        const movieInWatchlist = userWatchlist.some(
          (movie) => movie.id === movieId
        );
        setInWatchlist(movieInWatchlist);
      } catch (error) {
        console.error(error);
      }
    };
    checkWatchlist();
  }, [movieId]);

  const addWatchlist = async () => {
    try {
      await myAxios.post("/api/watchlist", { movieId });
      setInWatchlist(true);
      revalidate();
    } catch (error) {
      console.error(error);
    }
  };

  const removeWatchlist = async () => {
    try {
      await myAxios.delete("/api/watchlist", { data: { movieId } });
      setInWatchlist(false);
      revalidate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="watchlist-button-group">
      <button
        type="button"
        onClick={inWatchlist ? removeWatchlist : addWatchlist}
        className="watchlist-button"
      >
        {inWatchlist ? (
          <img src={WatchlistAdded} alt="Remove from watchlist" />
        ) : (
          <div className="watchlist-button-group">
            <img src={WatchlistAdd} alt="Add to watchlist" />
          </div>
        )}
      </button>
      {inWatchlist ? (
        <p className="watchlist-button-text">Already in watchlist</p>
      ) : (
        <p className="watchlist-button-text">Add to watchlist</p>
      )}
    </div>
  );
}

WatchListButton.propTypes = {
  movieId: PropTypes.number.isRequired,
  revalidate: PropTypes.func.isRequired,
};
