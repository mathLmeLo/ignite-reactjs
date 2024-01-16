import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  LocationCard,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src="logo.svg" alt="" />
      </NavLink>
      <ActionsContainer>
        <LocationCard>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationCard>
        <CartContainer>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={38} weight="fill" />
          </NavLink>
        </CartContainer>
      </ActionsContainer>
    </HeaderContainer>
  )
}
