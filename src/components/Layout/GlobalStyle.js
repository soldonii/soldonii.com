import { createGlobalStyle } from 'styled-components';
import NanumSquareRegular from '../../assets/NanumSquareRegular.ttf';
import NanumSquareBold from '../../assets/NanumSquareBold.ttf';
import IBMPlexMonoRegular from '../../assets/IBMPlexMono-Regular.ttf';
import IBMPlexMonoSemiBold from '../../assets/IBMPlexMono-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRegular';
    src: url(${NanumSquareRegular});
  }

  @font-face {
    font-family: 'NanumSquareBold';
    src: url(${NanumSquareBold});
  }

  @font-face {
    font-family: 'IBMPlexMonoRegular';
    src: url(${IBMPlexMonoRegular});
  }

  @font-face {
    font-family: 'IBMPlexMonoSemiBold';
    src: url(${IBMPlexMonoSemiBold});
  }

  html, body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    background-color: #eeebe5;
  }

  * {
    box-sizing: border-box;
    font-family: 'IBMPlexMonoRegular', 'NanumSquareRegular', sans-serif;
  }

  body {
    min-height: 100vh;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a, a:link, a:visited {
    color: inherit;
    margin: 0 1rem;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    transition: all 0.3s;
  }
`;

export default GlobalStyle;
