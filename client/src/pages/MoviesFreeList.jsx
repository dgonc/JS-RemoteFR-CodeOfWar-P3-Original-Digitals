import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "../styles/Movielist.css";

export default function MoviesFreeList() {
  const freeMovies = useLoaderData();

  return (
    <div className="card-container">
      {freeMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
