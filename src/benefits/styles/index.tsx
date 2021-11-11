import styled from 'styled-components/macro'
import { Button } from 'shared/styles'

export const BenefitsWrapper = styled.section`
  padding: 2.125em 1em 0;

  @media (min-width: 800px) {
    display: flex;
    padding-right: 0;
    max-height: 600px;
    gap: 4em;
  }
`

export const PhotosWrapper = styled.div`
  display: none;

  @media (min-width: 800px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: .5em;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    div {
      flex: none;
      height: 100%;
      height: -moz-available;
      height: -webkit-fill-available;
      height: fill-available;
      scroll-snap-align: start;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4em;
  margin: 0 auto;
  max-width: 25.813em;

  @media (min-width: 800px) {
    width: 50%;
  }
`

export const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;

  @media (min-width: 800px) {
    flex-direction: row;
    max-width: 25em;
    text-align: start;
    align-self: flex-end;
    gap: 2em;

    > div {
      display: flex;
      flex-direction: column;
      gap: .6em;

      h2,
      p {
        margin: 0;
      }
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.125rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: .75rem;
  }
`

export const IconWrapper = styled.div`
  padding: 1.5em;
  width: min-content;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: flex;
`

export const BenefitsButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'DM Sans', sans-serif;
  height: 3.563em;
  font-size: 1.036rem;

  @media (min-width: 800px) {
    margin: 1em;
  }

  path {
    fill: ${({ theme }) => theme.colors.white};
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.colors.white};
  }
`
