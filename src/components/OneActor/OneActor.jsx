import { Info, Item, WrapperContent } from './OneActor.styled';

const OneActor = ({ data }) => {
  const { name, id, character, popularity, profile_path } = data;
  const img =
    'https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg';
  return (
    <Item key={id}>
      <img
        src={
          profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : img
        }
        alt={name}
        style={{ width: '100%', height: '100%' }}
      />
      <WrapperContent>
        <Info style={{ fontSize: 24 }}>{name}</Info>
        <Info>Character:{character}</Info>
        <Info>Popularity: {popularity}</Info>
      </WrapperContent>
    </Item>
  );
};

export default OneActor;
