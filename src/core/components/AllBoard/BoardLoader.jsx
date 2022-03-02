import React from 'react';
import ContentLoader from 'react-content-loader';

const BoardLoader = () => {
  return (
    <ContentLoader width={210} height={160} speed={1} foregroundColor="#ecebeb">
      <rect x={10} y={10} rx="8" ry="8" width={200} height={150} />
    </ContentLoader>
  );
};

export default BoardLoader;
