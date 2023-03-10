import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../services/api';

function Reviews() {
  const { id } = useParams();

  useEffect(() => {
    async function getReviews(id) {
      const reviews = await fetchReviews();
      console.log('reviews', reviews);
    }

    getReviews(id);
  }, [id]);

  return (
    <ul>
      <li>Reviews</li>
    </ul>
  );
}

export default Reviews;
