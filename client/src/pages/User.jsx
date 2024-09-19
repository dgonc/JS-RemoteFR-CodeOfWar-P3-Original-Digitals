import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AccountManagement from "../components/AccountManagement";
import UserNavBar from "../components/UserNavBar";
import PasswordManagement from "../components/PasswordManagement";
import PreferenceManagement from "../components/PreferenceManagement";
import LogoutButton from "../components/LogoutButton";

function User() {
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
      <LogoutButton variant="panel" />
    </div>
  );
}

export default User;
