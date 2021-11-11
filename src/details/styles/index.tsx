import styled from 'styled-components'

export const DetailsWrapper = styled.section`
  padding: 85.84px 1em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.3em;

  @media (min-width: 800px) {
    text-align: start;
    gap: 0;
    max-width: 940px;
    margin: 0 auto;

    > div {
      display: flex;
      align-items: center;
    }

    > div:first-child {
      flex-direction: row-reverse;
    }
  }
`

export const Content = styled.div`
  max-width: 17.063em;
  margin: 0 auto;
  margin-bottom: 4em;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`

export const Subtitle = styled.h4`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: .5em 0;
`

export const Paragraph = styled.p`
  font-size: .75rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`
