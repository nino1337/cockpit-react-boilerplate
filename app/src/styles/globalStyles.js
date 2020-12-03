import { css } from '@emotion/core';

import mq from './mq';

const dynamicStyle = (theme) => css`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary}, sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin: 0;
    overflow-x: hidden;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  p {
    line-height: 1.4;
  }

  div {
    line-height: 1.4;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.4rem;
    line-height: 1;
    margin: 0;

    ${mq.lg} {
      font-size: 5rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 1;
    margin: 0;

    ${mq.lg} {
      font-size: 3.2rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    line-height: 1;
    margin-top: 0;

    ${mq.lg} {
      font-size: 2.6rem;
    }
  }

  h4 {
    margin-top: 0;
  }

  ${mq.xl} {
    .container {
      max-width: 1400px;
    }
  }
`;

export default dynamicStyle;
