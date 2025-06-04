import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}


    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        height: 100%;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;
