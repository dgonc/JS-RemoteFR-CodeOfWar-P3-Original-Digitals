import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "./styles/Navbar.css";
import "./styles/Userform.css";
import "./styles/Signup.css";
import "./styles/Landing.css";
import "./styles/Signin.css";
import "./styles/Userpanel.css";
import "./styles/Custommodal.css";
import "./styles/Carousel.css";

function App() {
  const [hide, setHide] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/admin") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [pathname]);

  return (
    <>
      {!hide && <NavBar />}

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
