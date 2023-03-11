import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../services/api';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews(id) {
      const {
        data: { results },
      } = await fetchReviews(id);
      console.log('reviews', results);

      results.map(res => {
        return setReviews(prev => [
          ...prev,
          { author: res.author, content: res.content },
        ]);
      });
    }

    getReviews(id);
  }, [id]);

  return (
    <div>
      {reviews.length === 0 && <p>There is no reviews of this movie yet!</p>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={nanoid()}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Reviews;
