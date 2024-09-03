import { useLoaderData } from "react-router-dom";

import MovieCard from "./MovieCard";

export default function MoviesList() {
  const data = useLoaderData();

  return (
    <>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}
