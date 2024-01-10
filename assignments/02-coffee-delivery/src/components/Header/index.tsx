import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LocationCard } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src="logo.svg" alt="" />
      </NavLink>
      <div>
        <LocationCard>
          <MapPin size={22} weight="fill" />
          João Pessoa, PB
        </LocationCard>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={38} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
