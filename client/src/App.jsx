import { Link, Outlet } from "react-router-dom";
import "./App.css";
import "./styles/Userform.css";
import "./styles/Signup.css";

function App() {
  return (
    <>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/users">Utilisateurs</Link>
      </li>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
