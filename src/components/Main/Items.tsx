import { CarSimple } from "@phosphor-icons/react";
import { IconBlock, ItensContainer } from "./Items.style";

export function Items() {
  return (
    <ItensContainer>
      <section>
        <IconBlock variant={"yellowDark"}>
          <CarSimple size={16} />
        </IconBlock>
        <p>Compra simples e segura</p>
      </section>
      <section>
        <IconBlock variant={"gray"}>
          <CarSimple size={16} />
        </IconBlock>
        <p>Compra simples e segura</p>
      </section>
      <section>
        <IconBlock variant={"yellow"}>
          <CarSimple size={16} />
        </IconBlock>
        <p>Compra simples e segura</p>
      </section>
      <section>
        <IconBlock variant={"purple"}>
          <CarSimple size={16} />
        </IconBlock>
        <p>Compra simples e segura</p>
      </section>
    </ItensContainer>
  )
}