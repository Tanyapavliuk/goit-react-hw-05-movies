import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;

  padding-top: 20px;
  padding-bottom: 50px;

  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid #e13c52;
  border-radius: 5px;
  padding: 20px;

  transition: background-color 250ms linear, transform 100ms linear;
  &:hover {
    background-color: #260d1a;
    transform: scale(1.02);
  }
`;
