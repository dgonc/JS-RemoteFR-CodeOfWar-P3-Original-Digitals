import { useLoaderData } from "react-router-dom";

import MovieCard from "./MovieCard";
import "../styles/Movielist.css";

export default function MoviesList() {
  const data = useLoaderData();

  return (
    <div className="card-container">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
