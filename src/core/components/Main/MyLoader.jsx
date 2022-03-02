import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => {
  const fixHeight = 97;
  let score1 = 22;
  let score2 = 22;
  const count = [1, 2, 3, 4, 5, 6];

  return (
    <ContentLoader speed={1} viewBox="0 0 1450 660" foregroundColor="#ecebeb">
      <rect x="0" y="22" rx="3" ry="3" width="250" height="50" />
      <rect x="325" y="22" rx="3" ry="3" width="1100" height="50" />
      {count.map((item) => (
        <rect key={item} x="0" y={(score1 += fixHeight)} rx="3" ry="3" width="250" height="50" />
      ))}
      {count.map((item) => (
        <rect key={item} x="325" y={(score2 += fixHeight)} rx="3" ry="3" width="1100" height="50" />
      ))}
    </ContentLoader>
  );
};

export default MyLoader;
