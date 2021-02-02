import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 1rem 4rem;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
