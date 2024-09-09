import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}; */
  }
  
  body {
    padding: 0 10rem;
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Baloo 2", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  html {
    font-size: 100%;
    
    @media (max-width: 2560px) {
      font-size: 130%;
    }
    
    @media (max-width: 1440px) {
      font-size: 100%;
    }

    @media (max-width: 1024px) {
      font-size: 90%;
    }

    @media (max-width: 768px) {
      font-size: 80%; 
    }

    @media (max-width: 480px) {
      font-size: 70%; 
    }
  }
`
