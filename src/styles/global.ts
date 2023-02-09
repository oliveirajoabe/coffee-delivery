import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :focus {
        outline:0;
    }

    body {
        background-color: ${(props) => props.theme['white-100']};
        color: ${(props) => props.theme['black-400']}
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    }
`