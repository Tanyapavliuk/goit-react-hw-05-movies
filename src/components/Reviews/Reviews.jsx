import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './Reviews.styled';
import Text from 'ui/Text';
import { FiUser } from 'react-icons/fi';
import { getRew } from 'servises/fetchReviews';
import Error from 'components/Error/Error';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const get = () => {
      getRew(movieId).then(data => setReviews(data.results));
    };
    get();
  }, [movieId]);

  console.log(reviews);

  const ListReviews = reviews.length ? (
    reviews.map(el => {
      const parts = el.created_at.slice(0, 10).split('-');
      const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
      return (
        <Item key={el.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text>
              <FiUser style={{ marginRight: 10 }} />
              {el.author}
            </Text>
            <p>{formattedDate}</p>
          </div>

          <p>{el.content}</p>
        </Item>
      );
    })
  ) : (
    <Error>No reviews yet</Error>
  );
  return <List>{ListReviews}</List>;
};

export default Reviews;
