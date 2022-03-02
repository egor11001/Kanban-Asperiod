import { Global, css } from '@emotion/core';
import { fontFamily, fontSize } from './variables';

const styles = css`
  html {
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    font-size: ${fontSize};
    font-family: ${fontFamily};
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
