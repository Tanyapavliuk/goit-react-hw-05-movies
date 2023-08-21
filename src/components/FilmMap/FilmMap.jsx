import { useEffect, useState } from 'react';
import getTrandingMovies from 'servises/fetchMovies';
import { Item, ListFilm, TitleFilm } from './FilmMap.styled';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

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
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  : 'https://ideipodarkov.net/reimg/data/gifts/20/715x520/1505120-6139.jpg'
              }
              alt={call}
            />
          </Link>
          <TitleFilm>{call}</TitleFilm>
        </Item>
      );
    })
  ) : (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#7a1f5c"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );

  return <ListFilm>{TrandingMovie}</ListFilm>;
};

export default FilmMap;
