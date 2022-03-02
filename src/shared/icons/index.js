import styled from '@emotion/styled';
import deleteIcon from './delete.svg';
import updateIcon from './update.svg';
import menuIcon from './menu.svg';

const LogoForProject = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  margin: 0;
  padding: 0;
`;

export const DeleteIcon = () => {
  return (
    <LogoForProject src={deleteIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 16V6H6H14H15V16C15 17.1046 14.1046 18 13 18H7C5.89543 18 5 17.1046 5 16ZM3 16V6H2C1.44772 6 1 5.55228 1 5C1 4.44772 1.44772 4 2 4H3H4H5C5 1.79086 6.79086 0 9 0H11C13.2091 0 15 1.79086 15 4H16H17H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H17V16C17 18.2091 15.2091 20 13 20H7C4.79086 20 3 18.2091 3 16ZM13 4H7C7 2.89543 7.89543 2 9 2H11C12.1046 2 13 2.89543 13 4ZM8 8C7.44772 8 7 8.44772 7 9V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8ZM12 8C11.4477 8 11 8.44772 11 9V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 12.5523 8 12 8Z"
        fill="#BFBFBF"
      />
    </LogoForProject>
  );
};

export const UpdateIcon = () => {
  return (
    <LogoForProject src={updateIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 13L2 15V18H5L7 16M4 13L7 16M4 13L12 5M7 16L15 8M12 5L15 2L18 5L15 8M12 5L15 8"
        stroke="#BFBFBF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </LogoForProject>
  );
};

export const MenuIcon = () => {
  return (
    <LogoForProject src={menuIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="2" fill="#BFBFBF" />
      <circle cx="10" cy="18" r="2" fill="#BFBFBF" />
      <circle cx="10" cy="2" r="2" fill="#BFBFBF" />
    </LogoForProject>
  );
};
