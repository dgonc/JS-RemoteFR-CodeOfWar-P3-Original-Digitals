import PropTypes from "prop-types";

export default function UserNavBar({ setActiveSection }) {
  return (
    <aside>
      <ul>
        <li>
          <button type="button" onClick={() => setActiveSection("AccountManagement")}>Profile</button>
        </li>
        <li>
          <button type="button" onClick={() => setActiveSection("PasswordManagement")}>Password</button>
        </li>
        <li>
          <button type="button" onClick={() => setActiveSection("PreferenceManagement")}>Preferences</button>
        </li>
      </ul>
      <button type="button">Logout</button>
    </aside>
  );
}

UserNavBar.propTypes = {
    setActiveSection: PropTypes.func.isRequired,
  };