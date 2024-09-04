import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />

      <nav>
        <div>
          <MapPin size={22} weight='fill' />
          <span>
            Porto Alegre, RS
          </span>
        </div>
        <a href='#'>
          <ShoppingCart size={22} weight='fill' />
        </a>
      </nav>
    </HeaderContainer>
  )
}