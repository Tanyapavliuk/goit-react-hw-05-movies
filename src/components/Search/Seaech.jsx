import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { FiFilm } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

import getFetchByName from 'servises/fetchByName';

import { IconWrap, InfoWrap, Input, Item, InputWrap } from './Search.styled';
import { ListFilm } from 'components/FilmMap/FilmMap.styled';
import Title from 'ui/Title';
import Text from 'ui/Text';
import Error from 'components/Error/Error';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState('');
  const params = searchParams.get('movie') ?? ''; //отримуємо значення параметру, якщо немає значення = ""
  const location = useLocation(); //Повертає об'єкт розташування
  const img =
    'https://media.istockphoto.com/vectors/page-not-found-error-404vector-template-vector-id643266374?k=6&m=643266374&s=612x612&w=0&h=FRFai8A7svnignh3iARisxWEBe6EH2ZF_QA8Irv2lSQ=';

  //------
  const checkSearchParam = evt => {
    const checkParam =
      evt.target.value !== '' ? { movie: evt.target.value } : {};
    setSearchParams(checkParam);
  };

  const getMoviesByName = () => {
    getFetchByName(params)
      .then(data => setFoundMovies(data.results))
      .catch(() => {
        setStatus('error');
      });
  };

  useEffect(() => {
    getFetchByName(params)
      .then(data => setFoundMovies(data.results))
      .catch(() => {
        setStatus('error');
      });
  }, [params]);

  useEffect(() => {
    console.log(foundMovies);
  }, [foundMovies]);

  const markap =
    foundMovies !== []
      ? foundMovies.map(
          ({ id, title, poster_path, vote_average, release_date }) => {
            const parts = release_date.split('-');
            const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
            return (
              <Link
                to={`/movies/${id}`}
                style={{ color: '#ffffff' }}
                state={{ from: location }} //в state записуємо поле from:звідки прийшов користувач
              >
                <Item key={id}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : img
                    }
                    alt={title}
                    style={{ width: '100%', height: '100%' }}
                  />
                  <InfoWrap>
                    <Title style={{ fontSize: 24 }}>{title}</Title>
                    <Text
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <FiFilm /> rating: {vote_average.toFixed(2)}
                    </Text>
                    <Text style={{ textAlign: 'center' }}>
                      Movie release data: {formattedDate}
                    </Text>
                  </InfoWrap>
                </Item>
              </Link>
            );
          }
        )
      : null;

  return (
    <>
      <InputWrap>
        <Input
          type="text"
          name="search"
          value={params}
          onChange={checkSearchParam}
        />
        <IconWrap
          onClick={() => {
            getMoviesByName();
          }}
        >
          <IoSearchOutline style={{ width: 30, height: 30 }} />
        </IconWrap>
      </InputWrap>
      {status !== 'error' ? (
        <ListFilm>{markap}</ListFilm>
      ) : (
        <Error>Not found movies</Error>
      )}
    </>
  );
};

export default Search;
