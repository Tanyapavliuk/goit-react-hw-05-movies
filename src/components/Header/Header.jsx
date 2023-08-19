import { NavLink } from 'react-router-dom';
import { HeaderWrapper, NavList, HeaderFlex } from './Header.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { GiFilmSpool } from 'react-icons/gi';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderFlex>
          <GiFilmSpool style={{ fill: '#FFFFFF', width: 50, height: 50 }} />
          <NavList>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </NavList>
        </HeaderFlex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
