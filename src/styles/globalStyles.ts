import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

html {
    height: 100%;
    width: 100%;
  }

  img {
    max-width: 100%;
  }

`

export default GlobalStyle;