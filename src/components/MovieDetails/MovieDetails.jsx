import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import getFetchById from 'servises/fetchById';
import MovieMarkap from 'components/MovieMarkap/MovieMarkap';

const MovieDetails = () => {
  const [movie, setMovie] = useState();

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const get = async () => {
      const data = await getFetchById(id);
      setMovie(data);
    };
    get();
  }, [id]);

  console.log(movie);
  const markap = !movie ? (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#7a1f5c"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  ) : (
    <MovieMarkap data={movie} />
  );
  return markap;
};

export default MovieDetails;
