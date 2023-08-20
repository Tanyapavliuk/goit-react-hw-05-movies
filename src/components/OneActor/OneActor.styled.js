import styled from '@emotion/styled';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 111px 250px;
  grid-template-rows: 155px;

  border: 1px solid #e13c52;

  overflow: hidden;
  transition: background-color 250ms linear, transform 100ms linear;
  &:hover {
    background-color: #260d1a;
    transform: scale(1.02);
  }
`;

export const WrapperContent = styled.div`
  padding: 20px;
`;

export const Info = styled.p`
  font-size: 16px;
`;
