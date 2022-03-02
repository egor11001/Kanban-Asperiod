import styled from '@emotion/styled';
import { borderGrey, closeGrey, primaryBlue } from '../../../shared/colors';
import AddIcon from '@mui/icons-material/Add';

export const PlusIcon = styled(AddIcon)`
  color: ${closeGrey};
  margin-bottom: 0.1rem;
  margin-right: 0.3rem;
`;

export const Content = styled.div`
  margin: 0;
  padding: 1em;
  display: flex;
  align-items: top;
`;

export const MainArea = styled.div`
  margin: 0em 1em 0;
  padding: 1em;
  overflow-x: scroll;
  width: 85vw;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 1rem 0 1.5rem;
`;

export const Title = styled.h1`
  display: inline-block;
  margin: 0;
  font-size: 24px;
`;

export const CreateBtn = styled.button`
  padding: 1rem;
  background-color: white;
  outline: none;
  border-radius: 8px;
  border: 1px solid ${borderGrey};
  font-family: Poppins;
  font-size: 14px;
  transition: 0.1s;
  margin-right: 7rem;
  &:hover {
    background-color: ${primaryBlue};
    color: white;
  }
`;

export const Columns = styled.div`
  min-width: 20vw;
  max-height: 63.6vh;
  align-items: top;
  padding: 2vw 2vh;
  margin: 3vh 2vh auto 1vh;
  border-radius: 5px;
  padding: 3px;
  flex-direction: column;
  background: #f4f5f7;
  display: inline-flex;
`;

export const TaskArea = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #dadbe2;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bfc4ce;
    border-radius: 20px;
  }
`;

export const BoardTitle = styled.h2`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 4px 0 0 6px;
  text-transform: uppercase;
  color: #5e6c84;
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin-top: 0vh;
`;

export const TaskButton = styled.button`
  margin: 1px 0 0 0;
  padding: 1px 1px 1px 6px;
  border-radius: 3px;
  transition: 0.1s;
  font-size: 1rem;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  color: ${primaryBlue};
  background: #f4f5f7;
  text-align: left;
  border: none;
  &:hover {
    cursor: pointer;
    background: #c8c8cc;
  }
`;

export const Task = styled.div`
  background-color: white;
  margin: 5px;
  padding: 7px;
  height: 5em;
  border: 0.05rem solid #999;
  border-radius: 2px;
  box-sizing: border-box;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    background: #d7d7d9;
  }
`;

export const ButtonMenu = styled.button`
  outline: none;
  padding: 0;
  background: none;
  display: inline-block;
  border: none;
  cursor: pointer;
`;

export const CreationDate = styled.div`
  font-size: 0.75rem;
  text-align: left;
  font-family: sans-serif;
  margin-top: 24px;
  text-overflow: ellipsis;
  justify-content: space-between;
`;

export const TaskText = styled.div`
  font-size: 1rem;
  text-align: left;
  font-family: sans-serif;
`;
