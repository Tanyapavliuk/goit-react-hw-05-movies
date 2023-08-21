import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { FiFilm } from 'react-icons/fi';
import { IconWrap, InfoWrap, Input, Item, InputWrap } from './Search.styled';
import { IoSearchOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { ListFilm } from 'components/FilmMap/FilmMap.styled';
import Title from 'ui/Title';
import Text from 'ui/Text';
import getFetchByName from 'servises/fetchByName';
import Error from 'components/Error/Error';

const Sesrch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState('');
  const params = searchParams.get('movie') ?? ''; //отримуємо значення параметру, якщо немає значення = ""
  const location = useLocation(); //Повертає об'єкт розташування

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
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
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
        <Error>Not found</Error>
      )}
    </>
  );
};

export default Sesrch;
