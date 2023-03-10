import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

function TrendingFilmsList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={nanoid()}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TrendingFilmsList;
