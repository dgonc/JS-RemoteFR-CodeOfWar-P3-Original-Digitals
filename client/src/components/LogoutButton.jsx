import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import AuthContext from "../contexts/AuthContext";

export default function LogoutButton({ variant }) {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  function getLogout() {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/api/logout`, {
        withCredentials: true,
      })
      .then(() => {
        setUser({ id: null, email: null });
        setIsAuthenticated(false);
        localStorage.clear();
      })
      .catch((error) => console.error(error));
  }

  const handleLogout = async () => {
    await getLogout();
    navigate("/landing");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={
        variant === "navbar" ? "navbar-logout-button" : "logout-button"
      }
    >
      Logout
    </button>
  );
}

LogoutButton.propTypes = {
  variant: PropTypes.string.isRequired,
};
