import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html{
        height: 100vh;
        overflow-x: hidden;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.border};
    }

    body{
        background: ${props => props.theme.background};
        color: ${props => props.theme.text};
        height: 100vh;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;