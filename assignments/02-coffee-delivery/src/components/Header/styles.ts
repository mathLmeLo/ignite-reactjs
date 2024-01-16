import { styled } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.5rem;
  padding: 2rem 10rem;
  margin: 0;
`

export const ActionsContainer = styled.div`
  display: flex;

  gap: 0.75rem;
`

export const LocationCard = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-radius: 6px;
  height: 2.375rem;
  gap: 0.25rem;

  ${mixins.fonts.textS};

  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const CartContainer = styled.div`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 6px;
    padding: 0.5rem;
  }
`
