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

  div {
    display: flex;
    align-items: center;

    gap: 0.75rem;
  }
`

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  height: 2.375rem;

  ${mixins.fonts.textS};

  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
