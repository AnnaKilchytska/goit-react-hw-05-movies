import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';

function Cast() {
  const { id } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const imageBaseURL = `https://image.tmdb.org/t/p/original`;
    async function getCast(id) {
      const {
        data: { cast },
      } = await getCredits(id);
      console.log('cast', cast);

      //   const imageBaseURL = await getImages();

      cast.map(person => {
        console.log(person);

        return setActors(prev => [
          ...prev,
          {
            name: person.name,
            character: person.character,
            image: `${imageBaseURL}${person.profile_path}`,
          },
        ]);
      });
    }

    getCast(id);
  }, [id]);

  return (
    <div>
      <p>The cast of the film</p>
      {actors.map(actor => {
        return (
          <div key={nanoid()}>
            <img src={actor.image} alt={actor.name} width="240px" />
            <p>
              Name: <span>{actor.name}</span>
            </p>
            <p>
              Character: <span>{actor.character}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cast;
