import axios from 'axios';

const API_KEY = '5e62b2453973c629f1496ace3a4b7719';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularFilms = async (page = 1) => {
  try {
    const data = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    console.log(data);
    return data;
  } catch (error) {
    console.dir(error);
  }
};

export const fetchMoviesById = async id => {
  try {
    const data = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
    console.log(data);
    return data;
  } catch (error) {}
};