import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";

function Home() {
  const { categories, movies } = useLoaderData();

  return (
    <>
      {categories.map((category) => (
        <section key={category.id} className="carrousel-container">
          <Carousel movies={movies} category={category} />
        </section>
      ))}
    </>
  );
}

export default Home;
