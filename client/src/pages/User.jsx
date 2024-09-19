import { useContext, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import AccountManagement from "../components/AccountManagement";
import UserNavBar from "../components/UserNavBar";
import PasswordManagement from "../components/PasswordManagement";
import PreferenceManagement from "../components/PreferenceManagement";
import AuthContext from "../contexts/AuthContext";

function User() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const user = useLoaderData();
  const [activeSection, setActiveSection] = useState("AccountManagement");

  const section = () => {
    switch (activeSection) {
      case "AccountManagement":
        return <AccountManagement user={user} />;
      case "PasswordManagement":
        return <PasswordManagement />;
      case "PreferenceManagement":
        return <PreferenceManagement />;

      default:
        return <UserNavBar />;
    }
  };

  return (
    <div className="user-account">
      <h2>Welcome, {user.firstname}</h2>
      <div className="user-account-panel">
        <UserNavBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="user-account-window">{section()}</div>
      </div>
      <Link
        to="/logout"
        onClick={() => {
          setIsAuthenticated(false);
          localStorage.clear();
        }}
        className="logout-button"
      >
        Logout
      </Link>
    </div>
  );
}

export default User;
