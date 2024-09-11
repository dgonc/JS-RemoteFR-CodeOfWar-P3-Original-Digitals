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
  const [isConnected, setIsConnected] = useState(false);
  
  const location = useLocation();
  return (
    <>
      {isConnected || location.pathname === "/signin" ? <NavBar /> : <NavBarLanding />}
      <main>
        <Outlet context={{ isConnected, setIsConnected}}/>
      </main>
    </>
  );
}

export default App;
