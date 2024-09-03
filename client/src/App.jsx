import { useEffect } from "react";

import getMovies from "./services/request";

import "./App.css";

function App() {
  useEffect(() => {
    getMovies();
  }, []);

  return <h1>Hello world !</h1>;
}

export default App;
