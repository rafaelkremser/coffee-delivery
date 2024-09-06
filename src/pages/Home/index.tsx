import { HomeContainer, TextContainer } from "./styles";

import mainIlustration from "../../assets/main-ilustration.png"
import { Items } from "../../components/Main/Items";

export function Home() {
  return (
    <HomeContainer>
      <aside>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
        </TextContainer>

        <Items />
      </aside>
      <img src={mainIlustration} alt="Ilustração de um copo de café" width={476} height={360} />
    </HomeContainer >
  )
}