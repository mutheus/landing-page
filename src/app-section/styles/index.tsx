import styled from 'styled-components'
import { Button } from 'shared/styles'

type AppWrapperProps = {
  wrapperHeight: number
}

export const AppWrapper = styled.section<AppWrapperProps>`
  padding: 3.375em 1em 0;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
  }

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    align-items: center;
    padding-top: 0;
    gap: 2em;
    height: ${({ wrapperHeight }) => `calc(${wrapperHeight}px - 80px)`};
    margin-top: 8.188em;

    > img {
      width: 40%;
      transform: translateY(-40px);
    }
  }
`

export const AppDetails = styled.div`
  text-align: center;
  max-width: 17.688em;
  margin: 0 auto;
  line-height: 1.5;

  @media (min-width: 800px) {
    text-align: start;
    max-width: none;

    > div {
      display: flex;
      gap: 1em;

      img {
        width: 50px;
        height: 36px;
        margin: auto 0;
      }
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .875rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: .75rem;

    @media (min-width: 800px) {
      max-width: 30em;
    }
  }
`

export const AppButton = styled(Button)`
  margin-top: 3em;
  min-width: max-content;

  @media (min-width: 800px) {
    margin: 0;
  }
`
