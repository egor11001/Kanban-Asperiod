import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  borderGrey,
  primaryGrey,
  primaryGrey2,
  primaryDanger,
  editColor,
  primaryBlue,
  primaryBlack,
} from '../../../shared/colors';

export const MainArea = styled.div`
  height: 93vh;
  max-width: 100%;
  min-width: 80%;
  padding: 2em 0 2em 3em;
`;

export const SecondArea = styled.div`
  display: grid;
  grid-template-columns: 8.05fr 1fr;
  border-bottom: 1px solid ${borderGrey};
  border-top: 1px solid ${borderGrey};
  &:nth-of-type(1) {
    border-top: none;
  }
`;

export const Content = styled.div`
  max-height: 70vh;
  padding-right: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${primaryGrey2};
    border-radius: 10px;
  }
`;

export const HeadArea = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  border-bottom: 1px solid ${borderGrey};
  border-top: 1px solid ${borderGrey};
  position: sticky;
  top: -2.2vh;
  background-color: white;
  opacity: 1;
`;

export const Projects = styled.h1`
  white-space: nowrap;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-self: center;
  max-width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-of-type(1) {
    padding-left: 8px;
    max-width: 16vw;
  }
`;

export const Title = styled.h1`
  background-color: white;
  margin: 0;
  padding-left: 8px;
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
  margin-right: 2rem;
  &:hover {
    background-color: ${primaryBlue};
    color: white;
  }
`;

export const InnerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;

export const Head = styled.h2`
  color: ${primaryGrey2};
  font-weight: 500;
  position: sticky;
  top: 10vh;
  font-size: 20px;
  &:nth-of-type(1) {
    padding-left: 8px;
  }
`;

export const ButtonForProject = styled.button`
  padding: 0.75rem 0.88rem;
  margin: 5%;
  border: 1px solid ${borderGrey};
  outline: none;
  border-radius: 8px;
  background-color: white;

  &:hover {
    background-color: ${primaryGrey};

    svg > path {
      stroke: ${({ isDelete }) => (isDelete ? 'none' : editColor)};
      fill: ${({ isDelete }) => (isDelete ? primaryDanger : 'none')};
    }
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 2.04fr 6fr;
  height: 100%;
  text-decoration: none;
  color: ${primaryBlack};
  &:hover {
    background-color: ${primaryGrey};
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0 1rem 1rem;
`;
