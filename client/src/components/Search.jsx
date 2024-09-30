import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Search({ toggleSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input className="search-input" type="text" onChange={handleSearch} />
      <Link
        className="search-action"
        to={search.length === 0 ? "/movies" : `/movies/search/${search}`}
        onClick={() => setSearch("")}
      >
        Search
      </Link>
      <button type="button" onClick={toggleSearch} className="search-close">
        Close
      </button>
    </div>
  );
}

Search.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
};
