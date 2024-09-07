import styled from "styled-components";

import mainBackground from '../../assets/main-background.png'
import { mixins } from "../../styles/mixins";



export const HomeContainer = styled.main`
  padding: 0 10rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  background: url(${mainBackground});
  background-size: cover;

  aside {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  img {
    height: 22.5rem;
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

