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
  } catch (error) {
    console.log(error);
  }
};

export const searchMoviesByQuery = async query => {
  try {
    const data = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&${query}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCredits = async id => {
  try {
    const data = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
    console.log('api cast', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async id => {
  try {
    const data = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    console.log('api reviews', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getImages = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    );
    const parcedData = await data.json();
    const { images } = parcedData;

    const imageBaseURL = `${images.secure_base_url}${
      images.profile_sizes[images.profile_sizes.length - 1]
    }`;
    return imageBaseURL;
  } catch (error) {
    console.log(error);
  }
};
