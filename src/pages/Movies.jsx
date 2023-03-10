import Searchbar from 'components/Searchbar';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByQuery } from 'services/api';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    if (!query) return;

    async function getMovie(query) {
      try {
        const movies = await searchMoviesByQuery(query);
        console.log('movies', movies);
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
    </div>
  );
}

export default Movies;
