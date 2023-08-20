import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 30px;
  padding: 10px 34px 10px 34px;
  border-radius: 60px;
  background-color: #e13c52;
  cursor: pointer;
  font-size: 20px;

  color: #ffffff;
  text-decoration: none;

  transition: background-color 250ms linear;
  &:hover {
    background-color: #7a1f5c;
  }
  &.active {
    background-color: #7a1f5c;
  }
`;
