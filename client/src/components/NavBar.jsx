import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import searchImg from "../assets/images/search.png";
import burger from "../assets/images/burger.png";
import AuthContext from "../contexts/AuthContext";
import LogoutButton from "./LogoutButton";
import Search from "./Search";

function NavBar() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handlePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    const main = document.querySelector("main");
    main.addEventListener("click", () =>
      searchOpen ? setSearchOpen(false) : ""
    );
  }, [searchOpen]);
  return (
    <nav className={`navbar ${scrollPosition !== 0 ? "scrolled" : ""}`}>
      {searchOpen ? (
        <Search toggleSearch={toggleSearch} />
      ) : (
        <>
          {isAuthenticated ? (
            <button
              type="button"
              className="button-search"
              onClick={toggleSearch}
            >
              <img
                className="search-img"
                src={searchImg}
                alt="magnifying glass"
              />
            </button>
          ) : null}
          <div className={`menu-dropdown ${menuOpen ? "open" : ""}`}>
            <button
              type="button"
              className="button-burger"
              onClick={toggleMenu}
            >
              <img className="menu-burger" src={burger} alt="menu-burger" />
            </button>
            <div className="links-list">
              <Link to="/" onClick={toggleMenu}>
                Accueil
              </Link>
              <div className="separation-line" />
              {isAuthenticated ? (
                <>
                  <Link to="/user" onClick={toggleMenu}>
                    Mon compte
                  </Link>
                  <div className="separation-line" />
                  <Link to="/watchlist" onClick={toggleMenu}>
                    Watchlist
                  </Link>
                  <div className="separation-line" />

                  {user.role === "admin" ? (
                    <>
                      <Link to="/admin" onClick={toggleMenu}>
                        Panel administrateur
                      </Link>
                      <div className="separation-line" />
                    </>
                  ) : null}
                  <LogoutButton variant="navbar" />
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    Se connecter
                  </Link>
                  <div className="separation-line" />
                  <Link to="/sign" onClick={toggleMenu}>
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
