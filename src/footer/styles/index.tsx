import styled from 'styled-components/macro'

export const FooterWrapper = styled.div`
  padding: 85.84px 1em 1.5em;
  display: flex;
  flex-direction: column;
  gap: 3.125em;

  @media (min-width: 800px) {
    > div:nth-child(2) {
      display: none;
    }
  }

  @media (min-width: 800px) {
    padding: 85.84px 3em 1.5em;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125em;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const LogoWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;

  a {
    line-height: 0;
  }

  > div {
    display: none;
  }

  @media (min-width: 800px) {
    align-items: flex-start;

    > div {
      display: initial;
    }
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2.2em;

  @media (min-width: 800px) {
    text-align: start;
    flex-direction: row;
    margin-left: auto;
  }

  h5 {
    font-weight: 600;
    margin: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3em;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.063rem;
  }
`

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3.438em;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
  }

  > div {
    display: flex;
    gap: 1.775em;
    max-width: min-content;
    margin: 0 auto;

    @media (min-width: 800px) {
      margin-right: 0;
    }
  }

  > p {
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Work Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }
`
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;


  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const UpButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  width: min-content;
`
