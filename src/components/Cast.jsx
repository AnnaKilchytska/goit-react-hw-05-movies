import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';
import { StyledCast } from './App.styled';

function Cast() {
  const defaultImg =
    'https://static.vecteezy.com/system/resources/previews/006/693/445/original/camera-icon-template-black-color-editable-camera-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg';

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
            image:
              person.profile_path !== null
                ? `${imageBaseURL}${person.profile_path}`
                : null,
          },
        ]);
      });
    }

    getCast(id);
  }, [id]);

  return (
    <StyledCast>
      {actors.length === 0 && (
        <div>Seems like there is no information about the cast!</div>
      )}
      {actors.map(actor => {
        return (
          <div className="item" key={nanoid()}>
            <img
              src={actor.image ? actor.image : defaultImg}
              alt={actor.name}
              width="240px"
            />
            <p>{actor.name}</p>
            <p className="role">
              <span>As</span> <span>{actor.character}</span>
            </p>
          </div>
        );
      })}
    </StyledCast>
  );
}

export default Cast;
