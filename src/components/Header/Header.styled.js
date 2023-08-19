import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  background-color: #000000;
`;
export const HeaderFlex = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 40px;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: #fff;

  * {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 20px;
  }
  *:hover {
    color: yellow;
  }
`;
