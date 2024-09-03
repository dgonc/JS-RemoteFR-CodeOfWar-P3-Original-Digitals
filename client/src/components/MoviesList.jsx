import { useLoaderData } from "react-router-dom";

function MoviesList() {
  const data = useLoaderData();

  return (
    <>
      {data.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <div>
            {movie.duration} mins, -{movie.classification} ans
          </div>
          <p>{movie.synopsis}</p>
        </div>
      ))}
    </>
  );
}

export default MoviesList;
