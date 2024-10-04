import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
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
import "./styles/Movielist.css";


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
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          limite={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Slide
        />
      </main>
    </>
  );
}

export default App;
