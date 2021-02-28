import {css} from "@emotion/core";
import SpoqaHanSansThin from '../static/SpoqaHanSans-Thin.subset.woff';
import SpoqaHanSansLight from '../static/SpoqaHanSans-Light.subset.woff';
import SpoqaHanSansRegular from '../static/SpoqaHanSans-Regular.subset.woff';
import SpoqaHanSansBold from '../static/SpoqaHanSans-Bold.subset.woff';

export const globalStyles = css`
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-style: normal;
    font-weight: 100;
    src: local('Spoqa Han Sans Thin'), local('SpoqaHanSans-Thin'),
      url(${SpoqaHanSansThin}) format('woff');
    unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0041-005A, U+0061-007A, U+0030-0039;
    font-display: block;
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Spoqa Han Sans Light'), local('SpoqaHanSans-Light'),
      url(${SpoqaHanSansLight}) format('woff');
    unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0041-005A, U+0061-007A, U+0030-0039;
    font-display: block;
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'), local('SpoqaHanSans-Regular'),
      url(${SpoqaHanSansRegular}) format('woff');
    unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0041-005A, U+0061-007A, U+0030-0039;
    font-display: block;
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'), local('SpoqaHanSans-Bold'),
      url(${SpoqaHanSansBold}) format('woff');
    unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0041-005A, U+0061-007A, U+0030-0039;
    font-display: block;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: "Spoqa Han Sans", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: "Spoqa Han Sans", "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type="number"] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
`;
