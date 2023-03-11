import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledFilmList, StyledLink } from './App.styled';

function FilmsList({ movies }) {
  const location = useLocation();

  return (
    <StyledFilmList>
      {movies.map(movie => {
        return (
          <li key={nanoid()}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </li>
        );
      })}
    </StyledFilmList>
  );
}

FilmsList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()),
};

export default FilmsList;
