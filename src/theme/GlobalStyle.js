import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    /* font-family: 'Special Elite', cursive; */
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Love Ya Like A Sister';
  }

  body, html {
    height: 100%;
    width: 100%;
    /* font-family: 'Special Elite', cursive; */
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Love Ya Like A Sister';
    background: #3f7cac;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    /* overflow-y: scroll; */
  }

  body {
    margin: 0;
    /* overflow-y: scroll; */
  }

  a {
    text-decoration: none;
    /* color: black; */
  }

  div.tl-edges {
    overflow-x: visible;
    height: 100vh;
  }

  div.tl-wrapper {
    height: 100%;
  }

`

export default GlobalStyle;