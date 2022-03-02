import styled from '@emotion/styled';
import * as colors from '../../shared/colors';

export const Wrapper = styled('div')`
  display: flex;
  background-color: ${colors.primaryGrey};
  margin: 0;
  align-items: center;
  height: 100vh;
`;

export const Inner = styled('div')`
  width: 50rem;
  margin: 0 auto 0 auto;
  background-color: ${colors.primaryWhite};
  border-radius: 20px;
  padding: 3rem 5rem;
`;
export const Images = styled.img`
  position: fixed;
  width: 2.8rem;
  text-align: justify;
`;
