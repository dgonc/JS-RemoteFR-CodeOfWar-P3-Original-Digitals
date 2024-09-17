import { useEffect, useState } from "react";
import axios from "axios";
import MovieByCategory from "../components/MovieByCategory";

function Home() {
  const [categories, setCategories] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState({});

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCategories();
  }, []);

  useEffect(() => {
    async function getMoviesByCategory(categoryId) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/categories/${categoryId}`
        );
        setMoviesByCategory((prev) => ({
          ...prev,
          [categoryId]: response.data,
        }));
      } catch (error) {
        console.error(error);
      }
    }

    categories.forEach((category) => {
      getMoviesByCategory(category.id);
    });
  }, [categories]);

  return (
    <>
      <h1>Welcome to the homepage !</h1>
      {categories.map((category) => (
        <section key={category.id}>
          <h2>{category.type}</h2>
          {moviesByCategory[category.id] ? (
            <MovieByCategory movies={moviesByCategory[category.id]} />
          ) : (
            <p>Loading...</p>
          )}
        </section>
      ))}
    </>
  );
}

export default Home;
