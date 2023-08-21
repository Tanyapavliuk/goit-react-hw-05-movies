import { FiFilm } from 'react-icons/fi';

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
import { Outlet } from 'react-router-dom';

const MovieMarkap = ({ data }) => {
  const { id, title, homepage, genres, vote_average, poster_path, overview } =
    data;

  return (
    <Wrapper>
      <PosterWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </PosterWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Text>Description: {overview} </Text>
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

      <Outlet />
    </Wrapper>
  );
};

export default MovieMarkap;
