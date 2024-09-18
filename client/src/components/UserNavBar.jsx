import PropTypes from "prop-types";

export default function UserNavBar({ activeSection, setActiveSection }) {
  return (
    <aside className="user-nav">
      <ul className="user-nav-menu">
        <li>
          <button
            className={`user-nav-button ${activeSection === "AccountManagement" ? "active-button" : ""}`}
            type="button"
            onClick={() => setActiveSection("AccountManagement")}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            className={`user-nav-button ${activeSection === "PasswordManagement" ? "active-button" : ""}`}
            type="button"
            onClick={() => setActiveSection("PasswordManagement")}
          >
            Password
          </button>
        </li>
        <li>
          <button
            className={`user-nav-button ${activeSection === "PreferenceManagement" ? "active-button" : ""}`}
            type="button"
            onClick={() => setActiveSection("PreferenceManagement")}
          >
            Preferences
          </button>
        </li>
      </ul>
    </aside>
  );
}

UserNavBar.propTypes = {
  activeSection: PropTypes.bool.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};
