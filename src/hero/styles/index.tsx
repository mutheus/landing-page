import styled from 'styled-components/macro'
import { Button } from 'shared/styles'
import Rectangle from '../assets/rectangle.svg'
import Symbols from '../assets/symbols.svg'

export const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12em 1em 9em;
  text-align: center;

  > img {
    display: none;
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: center;
    gap: 3em;
    background-image: url(${Symbols}), url(${Rectangle});
    background-repeat: no-repeat, no-repeat;
    background-size: 50%, 50%;
    background-position-x: right, 10%;
    background-position-y: center, center;

    > img {
      display: initial;
      width: 40%;
    }

    > div div {
      display: flex;
      align-items: center;
      gap: 1.438em;
    }
  }
`

export const Subtitle = styled.h5`
  font-size: .875rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.5;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Description = styled.p`
  font-size: 0.75rem;
  letter-spacing: .38px;
  line-height: 1.5;
  max-width: 30em;
  margin: 0 auto;

  @media (min-width: 800px) {
    padding: 0;
    max-width: 25em;
  }
`

export const HeroButton = styled(Button)`
  @media (min-width: 800px) {
    margin: 2em 0;
  }
`
