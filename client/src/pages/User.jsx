import { useContext, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import AccountManagement from "../components/AccountManagement";
import UserNavBar from "../components/UserNavBar";
import PasswordManagement from "../components/PasswordManagement";
import PreferenceManagement from "../components/PreferenceManagement";
import AuthContext from "../contexts/AuthContext";
import { getLogout } from "../services/request";

function User() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
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
        to="/landing"
        onClick={() => {
          setIsAuthenticated(false);
          setUser({ id: null, email: null });
          localStorage.clear();
          getLogout();
        }}
        className="logout-button"
      >
        Logout
      </Link>
    </div>
  );
}

export default User;
