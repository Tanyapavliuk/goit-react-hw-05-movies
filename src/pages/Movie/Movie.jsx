import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

import Search from 'components/Search/Seaech';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const Movies = () => {
  return (
    <Container>
      <Search />
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#7a1f5c"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        }
      >
        {<Outlet />}
      </Suspense>
    </Container>
  );
};

export default Movies;
