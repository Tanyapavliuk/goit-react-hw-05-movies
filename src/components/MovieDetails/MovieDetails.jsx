import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { ThreeDots } from 'react-loader-spinner';

import getFetchById from 'servises/fetchById';
import MovieMarkap from 'components/MovieMarkap/MovieMarkap';
import { StyledLink } from 'ui/Link.styled';
import { MovieWrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState();

  const location = useLocation();
  const backRef = useRef(location.state?.from ?? '/');
  const params = useParams();
  const id = params.movieId;
  console.log(location);

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
    <MovieWrap>
      <StyledLink to={backRef.current}>
        <FiArrowLeft style={{ width: 20, height: 20 }} />
        <p>Go back</p>
      </StyledLink>
      <MovieMarkap data={movie} />
    </MovieWrap>
  );
  return markap;
};

export default MovieDetails;
