import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { ThreeDots } from 'react-loader-spinner';

import getFetchById from 'servises/fetchById';
import MovieMarkap from 'components/MovieMarkap/MovieMarkap';
import { StyledLink } from 'ui/Link.styled';
import { MovieWrap } from './MovieDetails.styled';
import Error from 'components/Error/Error';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();

  const location = useLocation();
  const backRef = useRef(location.state?.from ?? '/');
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const get = async () => {
      getFetchById(id)
        .then(data => setMovie(data))
        .catch(e => setError(e));
    };
    get();
  }, [id]);

  const markap = !movie ? (
    <>
      {!error && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#7a1f5c"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}

      {error && <Error>Not found the information about this movie</Error>}
    </>
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
