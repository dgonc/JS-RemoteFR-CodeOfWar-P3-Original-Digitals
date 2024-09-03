import axios from "axios";

function getMovies() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/movies`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export default getMovies;
