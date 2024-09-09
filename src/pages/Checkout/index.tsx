import { MapPinLine, Minus, Plus } from "@phosphor-icons/react";
import { AddressContainer, CheckoutContainer, InputW200, InputW60, InputWFill, OrderConfirmContainer, OrderInfoContainer, PaymentContainer, Product, SelectedProducts } from "./styles";

import expressoTradicional from "../../assets/coffees/expresso.png";
import { useState } from "react";

export function Checkout() {
  const [value, setValue] = useState(1);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value > 1 ? value - 1 : 1);

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete o seu pedido</h2>
        <OrderInfoContainer>
          <div>
            <AddressContainer>
              <header>
                <div>
                  <MapPinLine />
                  <h3>Endereço de Entrega</h3>
                </div>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </header>
              <form action="">
                <div>
                  <InputW200 type="text" required />
                </div>
                <div>
                  <InputWFill type="text" required />
                </div>
                <div>
                  <InputW200 type="text" required />
                  <InputWFill type="text" required />
                </div>
                <div>
                  <InputW200 type="text" required />
                  <InputWFill type="text" required />
                  <InputW60 type="text" required />
                </div>
              </form>
            </AddressContainer>
            <PaymentContainer>
              <header>
                <div>
                  <MapPinLine />
                  <h3>Pagamento</h3>
                </div>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </header>
              <form action="">
                <input type="radio" name="credit" />
                <input type="radio" name="debit" />
                <input type="radio" name="money" />
              </form>
            </PaymentContainer>
          </div>
        </OrderInfoContainer>
      </div>
      <div>
        <h2>Complete o seu pedido</h2>
        <OrderConfirmContainer>
          <SelectedProducts>
            <Product>
              <img src={expressoTradicional} alt="Imagem do produto selecionado" />
              <div>
                <h4>Expresso Tradicional</h4>
                <div>
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
                </div>
              </div>
            </Product>
          </SelectedProducts>
        </OrderConfirmContainer>
      </div>
    </CheckoutContainer>
  )
}