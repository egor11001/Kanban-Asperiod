import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled('div')`
  display: flex; 
  flex-direction: row;
  align-items: center;
`;

const Img = styled('img')`
  margin-top: 3rem;
  pointer-events: none;
`;

const Title = styled('h1')`
  display: inline-block;
  font-size: 64px;
  margin-left: 5rem;
  margin-bottom: 7rem;
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <Img src="https://i.playground.ru/p/IhD3E4aAqBCqmlLus1Th3w.jpeg" alt="Not Found" />
      <Title>404 Not Found</Title>
    </Wrapper>
  );
};

export default ErrorPage;
