import styled from '@emotion/styled';
import HeaderContainer from '../Header/HeaderStyles';
import logo from '../Header/logo.svg';
import { fetchLogout } from '../../../pages/AuthPage/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Images = styled.img`
  width: 8%;
  min-width: 9.3rem;
  margin: 3%;
  margin: 1%;
  text-align: justify;
`;

const Button = styled.button`
  border: none;
  margin-right: 3vw;
  font-size: 16px;
  outline: none;
  font-family: Poppins;
  font-weight: 500;
  text-align: right;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const OnExit = () => {
    dispatch(fetchLogout());
  };
  const user = useSelector((state) => state.user);
  return (
    <header>
      <HeaderContainer>
        <Images src={logo} />
        <div>
          <Menu menuButton={<Button>{user.name}</Button>} transition>
            <MenuItem onClick={OnExit}>Exit</MenuItem>
          </Menu>
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
