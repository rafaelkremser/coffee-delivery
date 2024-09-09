import { useState } from "react";
import { CoffeeCardContainer, StyledWrapper } from "./styles";

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

interface CoffeeCardProps {
  title: string;
  description: string;
  ilustration: string;
  tags: string[];
}

export function CoffeeCard({ title, description, ilustration, tags }: CoffeeCardProps) {
  const [value, setValue] = useState(1);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value > 1 ? value - 1 : 1);

  return (
    <CoffeeCardContainer>
      <header>
        <img src={ilustration} alt={title} />
        <div>
          {tags.map(tag => { return <span>{tag}</span> })}
        </div>
      </header>
      <div className="info">
        <h5>{title}</h5>
        <p>{description}</p>
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