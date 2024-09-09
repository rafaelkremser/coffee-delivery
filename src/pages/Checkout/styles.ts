import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;    
  }
`

export const OrderInfoContainer = styled.article`

`

export const AddressContainer = styled.div`
  
`

export const PaymentContainer = styled.div`
  
`

export const InputW200 = styled.input`
  
`

export const InputWFill = styled.input`
  
`

export const InputW60 = styled.input`
  
`

export const OrderConfirmContainer = styled.aside`
  
`

export const SelectedProducts = styled.div`
  
`

export const Product = styled.div`
  
`

/* 
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
*/