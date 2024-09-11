import PropTypes from "prop-types";

export default function AdminNavBar({ setActiveSection }) {
  return (
    <nav>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => setActiveSection("ContentManagement")}
          >
            ContentManagement
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setActiveSection("UserManagement")}
          >
            Usermanagement
          </button>
        </li>
      </ul>
    </nav>
  );
}

AdminNavBar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};
