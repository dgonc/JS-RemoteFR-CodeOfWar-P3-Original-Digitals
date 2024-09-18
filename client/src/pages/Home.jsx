import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import AuthContext from "../contexts/AuthContext";

function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const { categories, movies } = useLoaderData();

  return (
    <>
      <h1 className="home-title">Welcome to Youflim</h1>
      {isAuthenticated ? (
        categories.map((category) => (
          <section key={category.id}>
            <h2>{category.type}</h2>
            {movies
              .filter((movie) => category.id === movie.category_id)
              .map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </section>
        ))
      ) : (
        <Link to="/login" className="go-back-button">
          Login
        </Link>
      )}
    </>
  );
}

export default Home;
