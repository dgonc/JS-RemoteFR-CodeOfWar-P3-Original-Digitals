import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCategories } from "../services/request";

export default function Search({ toggleSearch }) {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [select, setSelect] = useState("Title");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error in categories list", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="search-container">
      <select
        value={select}
        name="select"
        id="select"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="categories">Category</option>
      </select>
      {select === "categories" ? (
        <select name="select" id="select-category">
          {categories.map((category) => (
            <option key={category.id}>{category.type}</option>
          ))}
        </select>
      ) : (
        ""
      )}
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
