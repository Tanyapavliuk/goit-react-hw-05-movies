import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 375px;

  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 24px;
  }
`;
