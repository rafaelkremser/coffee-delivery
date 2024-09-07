import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const MainContainer = styled.main`
  padding: 0 10rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  background-size: cover;
  background-position: center;
  
  aside {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  img {
    height: 22.5rem;
  }

  .background {
    position: absolute;
    left: 0;
    top: 6rem;
    width: 100vw;
    z-index: -1000;
  }
`

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: ${mixins.fonts.titleXL};
    color: ${props => props.theme['base-title']};
  }

  h5 {
    font-family: 'Roboto', sans-serif;;
    font-family: ${mixins.fonts.textL};
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CoffeesContainer = styled.section`
  padding: 2rem 10rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font-family: ${mixins.fonts.titleL};
    color: ${props => props.theme['base-subtitle']};
  }

  article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`