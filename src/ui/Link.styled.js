import styled from '@emotion/styled';

export const LinkLook = styled.a`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  padding: 10px 34px 10px 34px;
  border-radius: 60px;
  background-color: #e13c52;
  cursor: pointer;

  color: #ffffff;
  text-decoration: none;

  transition: background-color 250ms linear;
  &:hover {
    background-color: #7a1f5c;
  }
`;
