/* eslint-disable react/jsx-props-no-spreading */
import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import MovieCard from "../components/MovieCard";

export default function MoviesFreeList() {
  const freeMovies = useLoaderData();
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="carrousel">
      <h2 className="carrousel-category-title">Films gratuits</h2>
      <Slider {...settings} className="movie_carrousel">
        {freeMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
}
