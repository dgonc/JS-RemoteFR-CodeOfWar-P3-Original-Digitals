import { useLoaderData } from "react-router-dom";

import "./App.css";

function App() {
  const data = useLoaderData();

  console.info("Depuis App", data);

  return (
    <>
      <h1>Youflim</h1>
      {data.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.synopsis}</p>
        </div>
      ))}
    </>
  );
}

export default App;
