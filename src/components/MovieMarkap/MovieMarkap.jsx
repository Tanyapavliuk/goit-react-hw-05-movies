import { FiFilm } from 'react-icons/fi';

import Title from 'ui/Title';
import { Wrapper, ContentWrapper, PosterWrapper } from './MovieMarkap.styled';
import Link from 'ui/Link';
import Text from 'ui/Text';

const MovieMarkap = ({ data }) => {
  const { title, homepage, genres, vote_average, poster_path, overview } = data;

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
        <Link href={homepage}>Дивитись тут</Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MovieMarkap;
