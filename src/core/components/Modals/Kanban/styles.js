import styled from '@emotion/styled';
import { Select } from '@mui/material';
import * as colors from '../../../../shared/colors';

export const Wrapper = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled('h1')`
  display: inline-block;
  width: 412px;
  color: black;
  font-family: Poppins;
  font-weight: 700;
  font-size: 18px;
  margin: 0 0 20px 0;
`;

export const SubTitle = styled('h2')`
  display: inline-block;
  width: 412px;
  color: black;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  margin: 32px 0 18px 0;
`;

export const Line = styled('div')`
  background-color: ${colors.borderGrey};
  color: ${colors.borderGrey};
  position: relative;
  width: 512px;
  height: 1px;
  right: 20px;
  margin: 0;
`;

export const Input = styled('input')`
  width: 472px;
  height: 40px;
  border: 1px solid ${colors.borderGrey};
  border-radius: 8px;
  padding: 0 1rem;
  font-size: 14px;
  font-family: Poppins;
  line-height: 20px;
  outline: none;

  &:focus {
    outline: 1px solid ${colors.digitalBlue};
    border: 1px solid ${colors.digitalBlue};
  }
`;

export const TextArea = styled('textarea')`
  width: 472px;
  min-height: 9rem;
  border: 1px solid ${colors.borderGrey};
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-size: 14px;
  font-family: Poppins;
  line-height: 20px;
  outline: none;
  resize: none;
  &:focus {
    outline: 1px solid ${colors.digitalBlue};
    border: 1px solid ${colors.digitalBlue};
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.primaryGrey2};
    border-radius: 10px;
  }
`;

export const InputSubmit = styled('input')`
  padding: 10px 16px;
  margin-top: 2rem;
  border-radius: 8px;
  border: 1px solid ${colors.borderGrey};
  align-self: end;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ disabled }) => (disabled ? 'none' : colors.primaryBlue)};
  color: ${({ disabled }) => (disabled ? colors.primaryBlack : colors.primaryWhite)};
`;

export const DeleteSubmit = styled('button')`
  padding: 10px 16px;
  margin-top: 2rem;
  border-radius: 8px;
  border: 1px solid ${colors.primaryDanger};
  align-self: start;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  background-color: white;
  color: ${colors.primaryDanger};

  &:hover {
    background-color: ${colors.primaryDanger};
    color: ${colors.primaryWhite};
  }
`;

export const InputErrorMessage = styled('p')`
  font-size: 14px;
  font-family: Roboto;
  line-height: 20px;
  color: ${colors.primaryDanger};
  margin: 1rem 0 0 0;
`;

export const DeleteBtn = styled('button')`
  padding: 10px 100px;
  border-radius: 8px;
  border: none;
  margin-top: 1rem;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  background-color: #ff4040;
  color: ${colors.primaryWhite};
  transition: 0.1s;
  &:hover {
    background-color: ${colors.primaryDanger};
  }
`;

export const DeleteInner = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeleteTitle = styled('h1')`
  font-size: 20px;
  font-weight: 500;
  margin-top: 3.5rem;
  display: inline-block;
  text-align: center;
`;

export const SelectInput = styled(Select)`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.primaryBlack};
  letter-spacing: 0;
  outline: none;
  width: 10rem;
  height: 2.5rem;
  border-radius: 8px;
  padding: 0 2px;
  &:focus {
    border-color: ${colors.digitalBlue};
  }
`;
