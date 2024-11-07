import { useLoaderData } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import "../styles/Movielist.css";

export default function MoviesListWithoutCategories() {
  const data = useLoaderData();

  return (
    <div className="card-container">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
