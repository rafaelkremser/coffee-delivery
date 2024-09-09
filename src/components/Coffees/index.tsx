import { CoffeeCard } from "./CoffeeCard";

import expressoTradicional from "../../assets/coffees/expresso.png";
import expressoAmericano from "../../assets/coffees/americano.png"
import expressoCremoso from "../../assets/coffees/expresso_cremoso.png"
import expressoGelado from "../../assets/coffees/cafe_gelado.png"
import cafeComLeite from "../../assets/coffees/cafe_com_leite.png"
import latte from "../../assets/coffees/latte.png"
import capuccino from "../../assets/coffees/capuccino.png"
import macchiato from "../../assets/coffees/macchiato.png"

export function Coffees() {
  const coffees = [
    {
      id: 1,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      ilustration: `${expressoTradicional}`,
      tags: ['tradicional']
    },
    {
      id: 2,
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      ilustration: `${expressoAmericano}`,
      tags: ['tradicional']
    },
    {
      id: 3,
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      ilustration: `${expressoCremoso}`,
      tags: ['tradicional']
    },
    {
      id: 4,
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      ilustration: `${expressoGelado}`,
      tags: ['tradicional', 'gelado']
    },
    {
      id: 5,
      title: 'Café com Leite',
      description: 'O tradicional café feito com água quente e grãos moídos',
      ilustration: `${cafeComLeite}`,
      tags: ['tradicional', 'com leite']
    },
    {
      id: 6,
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      ilustration: `${latte}`,
      tags: ['tradicional', 'com leite']
    },
    {
      id: 7,
      title: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      ilustration: `${capuccino}`,
      tags: ['tradicional', 'com leite']
    },
    {
      id: 8,
      title: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      ilustration: `${macchiato}`,
      tags: ['tradicional', 'com leite']
    },
  ]

  return (
    <>
      {coffees.map(coffee => {
        return (
          <CoffeeCard
            key={coffee.id}
            title={coffee.title}
            description={coffee.description}
            ilustration={coffee.ilustration}
            tags={coffee.tags}
          />
        )
      })}
    </>
  )
}