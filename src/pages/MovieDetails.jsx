import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById, getImages } from 'services/api';

function MovieDetails() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState('');

  const { id } = useParams();
  console.log('movie ID', id);

  useEffect(() => {
    async function getMovie(id) {
      const movie = await fetchMoviesById(id);
      console.log(movie);

      const imageBaseURL = await getImages();

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
    <div>
      <img src={image} width="370px" alt={title} />
      <h2>
        {title} <span>({releaseDate})</span>
      </h2>
      <p>{description}</p>
      <ul>
        {genres.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>

      <div>
        Additional information:
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetails;
