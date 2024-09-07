import { CoffeesContainer, MainContainer, TextContainer } from "./styles";

import { Items } from "../../components/Main/Items";

import mainIlustration from "../../assets/main-ilustration.png"
import mainBackground from '../../assets/main-background.png'
import { Coffees } from "../../components/Coffees";

export function Home() {
  return (
    <>
      <MainContainer>
        <aside>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
          </TextContainer>

          <Items />
        </aside>
        <img src={mainIlustration} alt="Ilustração de um copo de café" />
        <img src={mainBackground} className="background" />
      </MainContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <article>
          <Coffees />
        </article>
      </CoffeesContainer>
    </>
  )
}