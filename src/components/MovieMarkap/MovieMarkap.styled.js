import styled from '@emotion/styled';
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 450px 1fr;

  padding-top: 30px;
  @media (max-width: 678px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  grid-column-start: 2;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 7px;
  @media (max-width: 1200px) {
    height: 450px;
    overflow-y: scroll;
  }
`;
export const PosterWrapper = styled.div`
  width: 300px;
  grid-column-start: 1;
`;

export const Box = styled.div`
  display: flex;
  gap: 25px;
`;
