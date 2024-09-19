import { useState } from "react";

import ContentManagement from "../components/ContentManagement";
import AdminNavBar from "../components/AdminNavBar";
import MovieEdit from "../components/MovieEdit";

import "../styles/Adminpanel.css";

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("ContentManagement");

  const section = () => {
    switch (activeSection) {
      case "ContentManagement":
        return <ContentManagement />;
      case "MovieEdit":
        return <MovieEdit />;

      default:
        return <AdminNavBar />;
    }
  };
  return (
    <div className="admin-panel">
      <AdminNavBar setActiveSection={setActiveSection} />

      <div className="panel-selection">{section()}</div>
    </div>
  );
}
