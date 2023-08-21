import OneActor from 'components/OneActor/OneActor';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getActors from 'servises/fetchActors';
import { List } from './Actors.styled';

const Actors = () => {
  const [actors, setActors] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const get = () => {
      getActors(movieId).then(data => setActors(data.cast));
    };
    get();
  }, [movieId]);

  const ActorsList =
    actors.length < 20
      ? actors.map(el => <OneActor data={el} />)
      : actors.slice(0, 20).map(el => <OneActor data={el} />);

  console.log(actors);

  return (
    <>
      <List>{ActorsList}</List>
    </>
  );
};
export default Actors;
