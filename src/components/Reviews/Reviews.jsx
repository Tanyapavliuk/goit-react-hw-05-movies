import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './Reviews.styled';
import Text from 'ui/Text';
import { FiUser } from 'react-icons/fi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const movieId = params.movieId;
  const getRew = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d01e51005d6e36b3fa2b700cf557fb36&language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error('Not found reviews');
    }
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    const get = () => {
      getRew(movieId).then(data => setReviews(data.results));
    };
    get();
  }, [movieId]);

  console.log(reviews);

  const ListReviews = reviews.length
    ? reviews.map(el => {
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
    : null;
  return <List>{ListReviews}</List>;
};

export default Reviews;
