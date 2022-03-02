import styled from '@emotion/styled';
import * as colors from '../../../../shared/colors';
import CheckIcon from '@mui/icons-material/Check';

export const Wrapper = styled('form')`
  display: flex;
  flex-direction: column;
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
  margin: 33px 0 18px 0;
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

export const WrapperColors = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ColorsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 29.5rem;
  height: 2.5rem;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const ColorBox = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  background-color: ${({ boardColor }) => boardColor};
  cursor: pointer;
`;

export const CheckBox = styled(CheckIcon)`
  color: white;
`;
