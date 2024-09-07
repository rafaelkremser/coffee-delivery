import { useState } from "react";
import { CoffeeCardContainer, StyledWrapper } from "./styles";

import expressoTradicional from "../../../assets/coffees/expresso.png"
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

export function CoffeeCard() {
  const [value, setValue] = useState(1);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value > 1 ? value - 1 : 1);

  return (
    <CoffeeCardContainer>
      <header>
        <img src={expressoTradicional} alt="Café Expresso Tradicional" />
        <span>tradicional</span>
      </header>
      <div className="info">
        <h5>Expresso Tradicional</h5>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <StyledWrapper>
        <p><span>R$</span> 9,90</p>
        <div className="buy">
          <div className="number-control">
            <div className="number-left" onClick={decrement}>
              <Minus weight="bold" />
            </div>
            <input
              type="number"
              name="number"
              className="number-quantity"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <div className="number-right" onClick={increment}>
              <Plus weight="bold" />
            </div>
          </div>
          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </div>
      </StyledWrapper>
    </CoffeeCardContainer>
  )
}