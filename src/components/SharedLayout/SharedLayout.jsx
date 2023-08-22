import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

import { ThreeDots } from 'react-loader-spinner';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
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
      </main>
    </>
  );
};

export default SharedLayout;
