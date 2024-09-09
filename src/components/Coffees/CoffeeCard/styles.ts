import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const CoffeeCardContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  width: 16rem;
  
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    margin: -2.5rem 0 1rem 0;

    img {
      height: 7.5rem;
      width: 7.5rem;
      pointer-events: none;
    }

    div {
      display: flex;
      gap: .25rem;
      
      span {
        padding: .25rem .5rem;
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        font-family: ${mixins.fonts.tag};
        text-transform: uppercase;
        border-radius: 100px;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: center;
    
    h5 {
      font-family: ${mixins.fonts.titleS};
      color: ${props => props.theme["base-subtitle"]};
    }

    p {
      font-family: ${mixins.fonts.textS};
      color: ${props => props.theme["base-label"]};
      cursor: default;
    }
  }
`

export const StyledWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 1.5rem; */
  margin-top: 1.5rem;

  p {
    font-family: ${mixins.fonts.titleM};
    color: ${props => props.theme["base-text"]};
    
    span {
      font-family: ${mixins.fonts.textS};
    }
  }

  .buy {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  
  .number-control {
    display: flex;
    align-items: center;
    gap: .25rem;
    border-radius: 6px;
    background-color: ${props => props.theme["base-button"]};
    padding: .5rem .75rem;
  }

  .number-left,
  .number-right {
    content: attr(data-content);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${props => props.theme.purple};
    cursor: pointer;
    transition: .15s;
    
    * {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
  
  .number-left:hover,
  .number-right:hover {
    color: ${props => props.theme["purple-dark"]};
  }

  .number-quantity {
    border: 0;
    text-align: center;
    background-color: transparent;
    color: ${props => props.theme["base-title"]};
    font-family: ${mixins.fonts.textM};
    width: 1.25rem;
  }

  button {
    display: flex;
    padding: .5rem;
    background-color: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme["base-card"]};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: .15s;

    * {
      width: 1.375rem;
      height: 1.375rem;
    }
  }

  button:hover {
    background-color: ${props => props.theme["purple"]};
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
