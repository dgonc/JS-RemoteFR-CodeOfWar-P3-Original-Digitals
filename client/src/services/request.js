import axios from "axios";

export function getMovies() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/movies`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getUsers() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/users`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getAuth() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/checkauth`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
}
