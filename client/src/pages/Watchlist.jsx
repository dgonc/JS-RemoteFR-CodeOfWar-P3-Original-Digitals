import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const movies = useLoaderData();
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
