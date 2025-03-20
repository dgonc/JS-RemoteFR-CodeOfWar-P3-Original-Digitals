/* eslint-disable react/jsx-props-no-spreading */
import { useLoaderData, useRevalidator } from "react-router-dom";
import Slider from "react-slick";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const movies = useLoaderData();
  const { revalidate } = useRevalidator();
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 6,
    slidesToScroll: 1,
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
      <h2 className="carrousel-category-title">Watchlist</h2>
      <Slider {...settings} className="movie-carrousel">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} revalidate={revalidate} />
        ))}
      </Slider>
    </div>
  );
}
