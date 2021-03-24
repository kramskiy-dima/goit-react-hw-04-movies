import axios from 'axios';
const API_KEY = '0757258023265e845275de2a564555e9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function getPopularMovie() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  const movies = response.data.results;
  return movies;
}

async function searchMovies(value) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`,
  );
  const movies = response.data.results;
  return movies;
}

async function getMovieDetails(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  const movie = response.data;
  return movie;
}

async function getCust(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  const movieCast = response.data.cast;
  return movieCast;
}

async function getReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
  const movieReviews = response.data.results;
  return movieReviews;
}

export default {
  getPopularMovie,
  searchMovies,
  getMovieDetails,
  getCust,
  getReviews,
};
