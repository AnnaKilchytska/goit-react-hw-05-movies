import FilmsList from 'components/FilmsList';
import Searchbar from 'components/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByQuery } from 'services/api';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  //   const query = searchParams.get('query');

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    if (!query) return;

    async function getMovie(query) {
      try {
        const {
          data: { results: movies },
        } = await searchMoviesByQuery(query);
        console.log('movies', movies);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie(query);
  }, [searchParams]);

  const handleSubmit = query => {
    // console.log(query);
    setSearchParams({ query });
  };

  return (
    <div>
      <Searchbar onFormSubmit={handleSubmit} />
      {movies.length !== 0 && <FilmsList movies={movies} />}
    </div>
  );
}

export default Movies;
