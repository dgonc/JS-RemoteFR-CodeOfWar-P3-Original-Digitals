import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AccountManagement from "../components/AccountManagement";
import UserNavBar from "../components/UserNavBar";
import PasswordManagement from "../components/PasswordManagement";
import PreferenceManagement from "../components/PreferenceManagement";

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
      <h2>Gestion de compte</h2>
      <div className="user-account-panel">
      <UserNavBar setActiveSection={setActiveSection} />
      <div>{section()}</div>
      </div>
    </div>
  );
}

export default User;
