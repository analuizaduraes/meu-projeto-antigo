import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.COLORS.BLACK_BCKGRND_AND_BLACK_CLR};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
  }
`