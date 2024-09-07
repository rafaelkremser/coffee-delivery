import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react";
import { IconBlock, ItensContainer } from "./Items.style";

export function Items() {
  return (
    <ItensContainer>
      <section>
        <div>
          <IconBlock variant={"yellowDark"}>
            <ShoppingCartSimple size={16} weight="fill" />
          </IconBlock>
          <p>Compra simples e segura</p>
        </div>
        <div>
          <IconBlock variant={"yellow"}>
            <Timer size={16} weight="fill" />
          </IconBlock>
          <p>Entrega rápida e rastreada</p>
        </div>
      </section>
      <section>
        <div>
          <IconBlock variant={"gray"}>
            <Package size={16} weight="fill" />
          </IconBlock>
          <p>Embalagem mantém o café intacto</p>
        </div>
        <div>
          <IconBlock variant={"purple"}>
            <Coffee size={16} weight="fill" />
          </IconBlock>
          <p>O café chega fresquinho até você</p>
        </div>
      </section>
    </ItensContainer>
  )
}