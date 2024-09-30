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
        <Search toggleSearch={toggleSearch}/>
      ) : (
        <>
          <img
            aria-hidden="true"
            onClick={toggleSearch}
            className="search-img"
            src={searchImg}
            alt="magnifying glass"
          />
          <div className={`menu-dropdown ${menuOpen ? "open" : ""}`}>
            <img
              aria-hidden="true"
              className="menu-burger-button"
              onClick={toggleMenu}
              src={burger}
              alt=""
            />
            <div className="links-list">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <div className="separation-line" />
              {isAuthenticated ? (
                <>
                  <Link to="/user" onClick={toggleMenu}>
                    My account
                  </Link>
                  <div className="separation-line" />
                  <Link to="/watchlist" onClick={toggleMenu}>
                    Watchlist
                  </Link>
                  <div className="separation-line" />

                  {user.role === "admin" ? (
                    <>
                      <Link to="/admin" onClick={toggleMenu}>
                        Admin Panel
                      </Link>
                      <div className="separation-line" />
                    </>
                  ) : null}
                  <LogoutButton variant="navbar" />
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                  <div className="separation-line" />
                  <Link to="/sign" onClick={toggleMenu}>
                    Sign in
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
