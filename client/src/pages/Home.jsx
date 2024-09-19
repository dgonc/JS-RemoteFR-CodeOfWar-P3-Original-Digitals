import { useLoaderData,  } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Home() {
  const { categories, movies } = useLoaderData();
 
  return (
    <>
      <h1 className="home-title">Welcome to Youflim</h1>
      {categories.map((category) => (
        <section key={category.id}>
          <h2>{category.type}</h2>
          {movies
            .filter((movie) => category.id === movie.category_id)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
      ))}
    </>
  );
}

export default Home;
