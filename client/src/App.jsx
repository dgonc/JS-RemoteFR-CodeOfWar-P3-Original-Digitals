import { Link, Outlet } from "react-router-dom";
import "./App.css";
import "./styles/Userform.css";

function App() {
  return (
    <>
      <h1>Hello world !</h1>
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
