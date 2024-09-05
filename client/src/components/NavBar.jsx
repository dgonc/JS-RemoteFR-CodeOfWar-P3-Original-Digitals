import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="navbar">
      <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
        <button
          type="button"
          onClick={toggleMenu}
          className="menu-burger-button"
          aria-label="Menu burger"
        >
          Menu
        </button>
        <div className="links-list">
            <Link to="/" onClick={toggleMenu}>
              Accueil
            </Link>
            <div className="separation-line" />
            <Link to="/users" onClick={toggleMenu}>
              Utilisateurs
            </Link>
            <div className="separation-line" />
            <Link to="/movies" onClick={toggleMenu}>
              Movie List
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
