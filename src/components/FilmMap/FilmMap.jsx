import { useEffect, useState } from 'react';
import getTrandingMovies from 'servises/fetchMovies';
import { Item, ListFilm, TitleFilm } from './FilmMap.styled';
import { Link } from 'react-router-dom';

const FilmMap = () => {
  const [trandingMovies, setTrandingMovies] = useState();

  const get = async () => {
    const { results } = await getTrandingMovies();
    console.log(results);
    return results;
  };

  useEffect(() => {
    get().then(data => setTrandingMovies(data));
  }, []);

  const TrandingMovie = trandingMovies ? (
    trandingMovies.map(data => {
      const call = data?.title ? data.title : data.name;
      return (
        <Item key={data.id}>
          <Link to={`/movies/${data.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={call}
            />
          </Link>
          <TitleFilm>{call}</TitleFilm>
        </Item>
      );
    })
  ) : (
    <p>Sory</p>
  );

  return <ListFilm>{TrandingMovie}</ListFilm>;
};

export default FilmMap;
