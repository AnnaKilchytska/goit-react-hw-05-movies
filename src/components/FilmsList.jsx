import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

function FilmsList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={nanoid()}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FilmsList;
