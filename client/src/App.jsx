import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBarLanding from "./components/NavBarLanding";

import "./App.css";
import "./styles/Navbar.css";
import "./styles/Userform.css";
import "./styles/Signup.css";
import "./styles/Landing.css";
import "./styles/Signin.css";

function App() {
  const [auth, setAuth] = useState();
  
  const IsConnected = false;
  const location = useLocation();
  return (
    <>
      {IsConnected || location.pathname === "/signin" ? <NavBar /> : <NavBarLanding />}
      <main>
        <Outlet context={{ auth, setAuth}}/>
      </main>
    </>
  );
}

export default App;
