import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import * as colors from '../../../shared/colors';
import AddIcon from '@mui/icons-material/Add';

export const PlusIcon = styled(AddIcon)`
  margin-bottom: 0.1rem;
  margin-right: 0.3rem;
  color: ${colors.closeGrey};
`;

export const Title = styled.h1`
  padding: 0.6rem 0 0 1.5rem;
  font-size: 24px;
`;

export const MainArea = styled.div`
  margin: 0em 1em 0;
  padding: 1em;
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);
`;
export const Line = styled.div`
  background-color: ${colors.borderGrey};
  color: ${colors.borderGrey};
  position: relative;
  width: 193px;
  height: 1px;
  margin: 0 auto;
`;

export const WrapperBoard = styled.div`
  margin: 10px;
  border: 1px solid ${colors.borderGrey};
  height: 150px;
  width: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 8px 8px 5px 2px rgba(0, 73, 83, 0.3);
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ColorBox = styled.div`
  width: 5rem;
  height: 1.5rem;
  background-color: ${({ boardColor }) => boardColor};
  border-radius: 4px;
  outline: none;
  align-self: center;
  margin-left: 1rem;
`;

export const Board = styled(Link)`
  display: block;
  text-align: center;
  height: 100%;
  font-size: 14px;
  outline: none;
  border-radius: 0 0 8px 8px;
  font-family: Poppins;
  padding: 21.5% 8px 0 8px;
  color: ${colors.primaryBlack};
  cursor: pointer;
  transition: 0.3s;
  background-color: white;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    background-color: ${colors.primaryGrey};
  }
`;
export const NewBoard = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-family: Poppins;
  margin: 10px;
  transition: 0.2s;
  padding: 0;
  color: ${colors.primaryBlue};
  border: 1px dashed ${colors.borderGrey};
  height: 150px;
  width: 200px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &:hover {
    opacity: 0.9;
    background-color: ${colors.primaryGrey};
  }
  &:active {
    opacity: 0.8;
  }
`;
export const ButtonMenu = styled.button`
  outline: none;
  padding: 0;
  background: none;
  border: none;
  align-self: end;
  margin: 10px 8px 7px 0;
  cursor: pointer;
`;
