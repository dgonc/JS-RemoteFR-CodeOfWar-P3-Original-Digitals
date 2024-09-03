import axios from "axios";

const getMovies = () => {
  axios
    .get("http://localhost:3310/api/movies")
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
};

export default getMovies;
