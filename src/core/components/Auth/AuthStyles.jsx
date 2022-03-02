import styled from '@emotion/styled';
import { css } from '@emotion/core';
import * as colors from '../../../shared/colors';

export const InputErrorMessage = styled('p')`
  font-size: 14px;
  font-family: Roboto;
  line-height: 20px;
  color: ${colors.primaryDanger};
  margin: 1rem 0 0 0;
`;

export const InputContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const Input = styled('input')`
  width: 15rem;
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
  width: 21rem;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 8px;
  border: 1px solid ${colors.borderGrey};
  align-self: center;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ disabled }) => (disabled ? 'none' : colors.primaryBlue)};
  color: ${({ disabled }) => (disabled ? colors.primaryBlack : colors.primaryWhite)};
   {
  }
`;

export const LinkStyle = css`
  font-size: 16px;
  text-decoration: underline;
  color: ${colors.primaryBlack};
  align-self: center;
  margin-bottom: 1.5rem;
`;

export const WrapperAuth = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled('h2')`
  display: inline-block;
  align-self: center;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 28px;
`;

export const LabelEmail = styled('label')`
  margin-right: 3.1rem;
`;

export const LabelPassword = styled('label')`
  margin-right: 1rem;
`;

export const LabelName = styled('label')`
  margin-right: 1.1rem;
`;
