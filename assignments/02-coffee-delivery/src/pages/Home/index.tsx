import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HeroContainer, HeroContent, HeroTextContainer } from './styles'

export function Home() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <ul>
            <li id="icon1">
              <ShoppingCart weight="fill" size={32} />
              Compra simples e segura
            </li>
            <li id="icon3">
              <Package weight="fill" size={32} />
              Embalagem mantém o café intacto
            </li>
            <li id="icon2">
              <Timer weight="fill" size={32} />
              Entrega rápida e rastreada
            </li>
            <li id="icon4">
              <Coffee weight="fill" size={32} />O café chega fresquinho até você
            </li>
          </ul>
        </HeroTextContainer>
        <img id="hero" src="images/hero.svg" alt="foto de café" />
      </HeroContent>
      <img id="hero-bg" src="images/hero-bg.svg" alt="" />
    </HeroContainer>
  )
}
