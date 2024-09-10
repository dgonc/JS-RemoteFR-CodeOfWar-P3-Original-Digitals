import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBarLanding from "./components/NavBarLanding";

import "./App.css";
import "./styles/Navbar.css";
import "./styles/Userform.css";
import "./styles/Signup.css";
import "./styles/Landing.css";

function App() {
  const IsConnected = false;
  return (
    <>
      {IsConnected ? <NavBar /> : <NavBarLanding />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
