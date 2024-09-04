import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ul>
      <li>
        <Link to="/movies">Movie List</Link>
      </li>
    </ul>
  );
}

export default App;
