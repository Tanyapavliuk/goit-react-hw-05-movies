import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FiFilm } from 'react-icons/fi';
import { ThreeDots } from 'react-loader-spinner';

import LinkStyled from 'ui/Link';
import Text from 'ui/Text';
import Title from 'ui/Title';
import { StyledLink } from 'ui/Link.styled';
import {
  Wrapper,
  ContentWrapper,
  PosterWrapper,
  Box,
} from './MovieMarkap.styled';

const MovieMarkap = ({ data }) => {
  const { id, title, homepage, genres, vote_average, poster_path, overview } =
    data;

  return (
    <Wrapper>
      <PosterWrapper>
        <img
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://ideipodarkov.net/reimg/data/gifts/20/715x520/1505120-6139.jpg'
          }
          alt={title}
          style={{ width: '100%', height: '100%' }}
        />
      </PosterWrapper>
      <ContentWrapper>
        <Title style={{ fontSize: 20 }}>{title}</Title>
        <Text style={{ fontSize: 16 }}>Description: {overview} </Text>
        <Text style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <FiFilm /> rating: {vote_average.toFixed(2)}
        </Text>
        <Text>Genres:</Text>
        <ul>
          {genres.map(el => (
            <li key={el.name}>{el.name}</li>
          ))}
        </ul>
        <LinkStyled href={homepage}>Watch here</LinkStyled>
        <Box>
          <StyledLink to={`/movies/${id}/cast`}>Actors</StyledLink>
          <StyledLink to={`/movies/${id}/reviews`}>Reviews</StyledLink>
        </Box>
      </ContentWrapper>

      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#7a1f5c"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        }
      >
        {<Outlet />}
      </Suspense>
    </Wrapper>
  );
};

export default MovieMarkap;
