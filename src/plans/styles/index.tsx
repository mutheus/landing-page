import styled from 'styled-components/macro'
import { Button } from 'shared/styles'

export const PlansWrapper = styled.section`
  padding: 85.84px 1em 0;
  margin: 0 0 2em;
  max-width: 34em;
  margin: 0 auto;

  > div {
    width: 100%;
  }

  @media (min-width: 800px) {
    max-width: none;

    > div {
      display: flex;
      gap: 2em;
    }
  }

  @media (min-width: 1080px) {
    max-width: 80vw;
  }
`

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 800px) {
    text-align: start;
  }
`

export const Subtitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: .5em 0 3em;
  text-align: center;

  @media (min-width: 800px) {
    text-align: start;
  }
`

export const Card = styled.div`
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  gap: .7em;
  margin-bottom: 1.438em;

  @media (min-width: 800px) {
    width: 50%;
  }
`

type StarProps = {
  star: string
}

export const Header = styled.div`
  display: flex;
  min-height: 5.6em;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: .75rem;
      color: #3C5882;
      margin: 0;
    }

    h5 {
      font-size: 1rem;
      font-weight: 700;
      margin: .313em 0;
      font-family: 'Nunito', sans-serif;
    }
  }
`

export const StarWrapper = styled.div<StarProps>`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.primary};
    background-image: url(${({ star }) => star});
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(19.52deg);
    text-align: center;
    min-height: 5.6em;
    aspect-ratio: 1/1;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h6 {
      font-size: 1.25rem;
      margin: 0;
    }

    span {
      font-size: .5rem;
    }
`

export const Body = styled.div`
  h5 {
    font-size: .75rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  ul {
    padding-left: 29px;
    font-size: .563rem;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  li {
    list-style: none;
    line-height: 2.2;
  }

  svg {
    margin-right: .688em;
  }
`

export const Footer = styled.div`
  display: flex;
  font-size: .5rem;
  color: rgba(255, 255, 255, 0.45);
  place-items: center;
`

export const PlanPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 5px;

  p {
    margin: 0;
  }
`

export const CardButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(145.09deg, rgba(38, 233, 207, 1), rgba(37, 205, 225, 1));
  box-shadow: -0.652262px 0.652262px 3.91357px rgba(126, 87, 87, 0.26);
  border-radius: 6px;
  max-width: 111px;
  height: 33.64px;
  font-size: .625rem;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  margin-left: auto;
`

export const Currency = styled.span`
  font-size: .7rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const CurrencyValue = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
`

export const PlanPrice = styled.div`
  display: flex;
  gap: 4px;
`

export const SecondaryCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 0.56px solid rgba(32, 30, 84, 0.18);

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

export const SecondaryButton = styled(CardButton)`
  background: ${({ theme }) => theme.colors.primary};
`

export const SecondaryPlanPrice = styled(PlanPrice)`
  p,
  span:last-child {
    color: ${({ theme }) => theme.colors.primary};
  }
`
