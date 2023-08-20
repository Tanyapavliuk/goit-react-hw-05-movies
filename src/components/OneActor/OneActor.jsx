import { Info, Item, WrapperContent } from './OneActor.styled';

const OneActor = ({ data }) => {
  const { name, id, character, popularity, profile_path } = data;
  return (
    <Item key={id}>
      <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
      <WrapperContent>
        <Info style={{ fontSize: 24 }}>{name}</Info>
        <Info>Character:{character}</Info>
        <Info>Popularity: {popularity}</Info>
      </WrapperContent>
    </Item>
  );
};

export default OneActor;
