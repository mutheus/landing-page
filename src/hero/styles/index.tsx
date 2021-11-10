import styled from 'styled-components/macro'

export const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12em 1em 9em;
  text-align: center;
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
  padding: 0 3em;
`
