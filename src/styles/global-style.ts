import { createGlobalStyle } from "styled-components";
import { FONT_BODY } from "./style-guide-var";

export const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1100),
  phone: customMediaQuery(600),
};

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: "Poppins", 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #AAA;
    color: #333333;
    font-size: ${FONT_BODY};
  }
`;

export default GlobalStyle;
