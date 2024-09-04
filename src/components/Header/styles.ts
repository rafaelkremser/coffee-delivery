import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  img {
    pointer-events: none;
  }

  nav {
    display: flex;
    gap: .75rem;

    div {
      display: flex;
      align-items: center;
      gap: .25rem;
      padding: .5rem;
      background: ${props => props.theme['purple-light']};
      color: ${props => props.theme['purple']};
      border-radius: 6px;
      cursor: default;

      span {
        font-family: ${mixins.fonts.textS};
        color: ${props => props.theme['purple-dark']};
      }
    }
    
    a {
      padding: .5rem;
      background: ${props => props.theme['yellow-light']};
      color: ${props => props.theme['yellow-dark']};
      border-radius: 6px;
      display: flex;
    }
  }  
`