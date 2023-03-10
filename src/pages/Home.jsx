import TrendingFilmsList from 'components/TrendindFilmsList';
import { useEffect, useState } from 'react';
import { fetchPopularFilms } from '../services/api';

function Home() {
  const [films, setFilms] = useState('');
  useEffect(() => {
    async function getFilms() {
      const {
        data: { results: films },
      } = await fetchPopularFilms(1);
      console.log('films', films);
      setFilms(films);
    }
    getFilms();
  }, []);

  return (
    <div>{films.length !== 0 && <TrendingFilmsList movies={films} />}</div>
  );
}

export default Home;
