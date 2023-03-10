import { StyledLink, StyledMovieDetails } from 'components/App.styled';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

function MovieDetails() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState('');

  const { id } = useParams();
  console.log('movie ID', id);

  useEffect(() => {
    const imageBaseURL = `https://image.tmdb.org/t/p/original`;
    async function getMovie(id) {
      const movie = await fetchMoviesById(id);
      console.log(movie);

      //   const imageBaseURL = await getImages();
      //   console.log(imageBaseURL);

      const { data } = movie;
      setImage(`${imageBaseURL}${data.poster_path}`);
      setTitle(data.title);
      setDescription(data.overview);
      setReleaseDate(data.release_date.slice(0, 4));
      setGenres(data.genres.map(genre => genre.name));
    }
    getMovie(id);
  }, [id]);

  return (
    <StyledMovieDetails>
      <div className="main-detailes">
        <img src={image} width="370px" alt={title} />

        <div>
          <h2>
            {title} <span>({releaseDate})</span>
          </h2>
          <p>{description}</p>
          <ul>
            {genres.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="additional">
        <h3>Additional information:</h3>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </StyledMovieDetails>
  );
}

export default MovieDetails;
