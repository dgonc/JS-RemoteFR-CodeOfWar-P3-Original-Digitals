/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ movies, category }) {
  console.info(movies);
  console.info(category);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: false,
  };
  return (
    <div className="carrousel">
      <h2 className="carrousel-category-title">{category.type}</h2>
      <Slider {...settings} className="movie-carrousel">
        {movies
          .filter((movie) => category.id === movie.category_id)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </Slider>
    </div>
  );
}

Carousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
