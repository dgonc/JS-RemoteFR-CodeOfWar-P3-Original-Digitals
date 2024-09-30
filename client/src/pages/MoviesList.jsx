/* eslint-disable react/jsx-props-no-spreading */
import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";

import MovieCard from "../components/MovieCard";
import "../styles/Movielist.css";

export default function MoviesList() {
  const data = useLoaderData();
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 4,
    slidesToScroll: 1,
    slidesPerRow: 4,
    rows: 1,
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
      <Slider {...settings} className="movie-carrousel">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
}
