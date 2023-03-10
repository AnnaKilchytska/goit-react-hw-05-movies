// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchMoviesById } from 'services/api';

function MovieDetails() {
  const { id } = useParams();
  console.log('movie ID', id);

  //   useEffect(() => {
  //     async function getMovie(id) {
  //       const movie = await fetchMoviesById(id);
  //       console.log(movie);
  //     }
  //     getMovie(id);
  //   }, []);

  return <div>{id}</div>;
}

export default MovieDetails;
