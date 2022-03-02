import React from 'react';
import styled from '@emotion/styled';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { primaryBlue } from '../../shared/colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <Container>
      <ScaleLoader color={primaryBlue} height={120} width={8} radius={2} margin={4} />
    </Container>
  );
};

export default Loader;
