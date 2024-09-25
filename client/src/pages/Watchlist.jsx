import { useLoaderData, useRevalidator } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const movies = useLoaderData();
  const { revalidate } = useRevalidator();
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} revalidate={revalidate} />
      ))}
    </div>
  );
}
