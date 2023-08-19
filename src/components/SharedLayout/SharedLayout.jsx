import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
