import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoutButton from "./LogoutButton";

export default function AdminNavBar({ setActiveSection }) {
  return (
    <section className="admin-nav-container">
      <Link to="/"> Aller à l'accueil</Link>
      <aside className="admin-nav">
        <button
          className="admin-nav-button"
          type="button"
          onClick={() => setActiveSection("ContentManagement")}
        >
          Ajouter un film
        </button>
        <button
          className="admin-nav-button"
          type="button"
          onClick={() => setActiveSection("MovieEdit")}
        >
          Editer ou supprimer un film
        </button>
      </aside>
      <LogoutButton variant="panel" />
    </section>
  );
}

AdminNavBar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};
