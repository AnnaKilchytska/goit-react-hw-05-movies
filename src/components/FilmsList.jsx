import { nanoid } from 'nanoid';
import { StyledFilmList, StyledLink } from './App.styled';

function FilmsList({ movies }) {
  return (
    <StyledFilmList>
      {movies.map(movie => {
        return (
          <li key={nanoid()}>
            <StyledLink to={`movies/${movie.id}`}>{movie.title}</StyledLink>
          </li>
        );
      })}
    </StyledFilmList>
  );
}

export default FilmsList;
