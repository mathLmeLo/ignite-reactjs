import { styled } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeroContainer = styled.section`
  width: 100vw;
  height: 34rem;

  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  display: flex;

  padding: 5.75rem 10rem;
  /* gap: 3.5rem; */
  justify-content: space-between;

  img#hero {
    height: 22.5rem;
    width: 29.75rem;
  }
`

export const HeroTextContainer = styled.div`
  max-width: 36.75rem;

  h1 {
    ${mixins.fonts.titleXL};
    color: ${(props) => props.theme.colors['base-title']};
  }

  h2 {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-top: 1rem;
  }

  ul {
    max-width: 35.4375rem;
    margin-top: 4.0625rem;
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-text']};
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.25rem;

    svg {
      border-radius: 50%;
      padding: 0.5rem;
      color: ${(props) => props.theme.colors.background};
    }

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    #icon1 {
      svg {
        background-color: ${(props) => props.theme.colors['yellow-dark']};
      }
    }

    #icon2 {
      svg {
        background-color: ${(props) => props.theme.colors.yellow};
      }
    }

    #icon3 {
      svg {
        background-color: ${(props) => props.theme.colors['base-text']};
      }
    }

    #icon4 {
      svg {
        background-color: ${(props) => props.theme.colors.purple};
      }
    }
  }
`
