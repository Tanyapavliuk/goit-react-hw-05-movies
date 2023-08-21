import Search from 'components/Search/Seaech';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <Container>
      <Search />
      <Outlet />
    </Container>
  );
};

export default Movies;
