import Slider from 'react-slick'
import styled from 'styled-components/macro'

export const Wrapper = styled.section`
  margin: 5.5em 0 2.494em;
  padding: 0 1em;

  @media (min-width: 1080px) {
    max-width: 80vw;
    margin: 5.5em auto 2.494em;
  }
`

export const SliderWrapper = styled(Slider)`
  position: relative;

  @media (min-width: 800px) {
    padding: 0 4em;
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
  margin: .5em auto 1.5em;
  text-align: center;
  max-width: 15em;

  @media (min-width: 800px) {
    text-align: start;
    margin-left: 0;
  }
`

export const Image = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
`

export const TestimonialCard = styled.div`
  padding: 1.375em;
  box-shadow: 0px 0.918919px 3.67568px rgba(0, 0, 0, 0.22);
  border-radius: .575em;
  margin: 2em .9375em 4em;
  color: ${({ theme }) => theme.colors.text};

  > p {
    margin-bottom: 4em;
  }

  > div {
    display: flex;
    align-items: center;
    gap: .861em;

    *:last-child {
      margin-left: auto;
    }

    h5 {
      font-weight: 600;
      font-size: 1.125rem;
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      margin: 0;
      font-size: .75rem;
    }
  }
`

type ArrowBtnProps = {
  right: boolean
}

export const ArrowBtn = styled.button<ArrowBtnProps>`
  width: 31px;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: ${({ right }) => right ? 'calc(50% + 1px)' : 'none'};
  left: ${({ right }) => !right ? 'calc(50% + 1px)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ right }) => right ? 'none' : 'rotate(180deg)'};
  z-index: 10;

  @media (min-width: 800px) {
    bottom: 50%;
    right: ${({ right }) => right ? '1em' : 'none'};
    left: ${({ right }) => !right ? '1em' : 'none'};
    transform: ${({ right }) => right ? 'rotate(180deg)' : 'none'};
    width: 51px;
  }
`
