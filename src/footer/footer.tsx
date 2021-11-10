import { ReactComponent as Logo } from 'shared/assets/brand-logo.svg'
import AppleStore from 'shared/assets/apple-store.png'
import GoogleStore from 'shared/assets/google-store.png'
import { ReactComponent as FBLogo } from 'shared/assets/facebook-fill.svg'
import { ReactComponent as InstagramLogo } from 'shared/assets/instagram-fill.svg'
import { ReactComponent as TwitterLogo } from 'shared/assets/twitter-fill.svg'
import { ReactComponent as CopyrightIcon } from 'shared/assets/copyright-icon.svg'
import { ReactComponent as UpIcon } from 'shared/assets/up-icon.svg'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'

const FooterWrapper = styled.div`
  padding: 85.84px 1em 1.5em;
  display: flex;
  flex-direction: column;
  gap: 3.125em;
`

const LogoWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;

  a {
    line-height: 0;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2.2em;

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

const LinkContainer = styled.div`
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

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3.438em;

  > div {
    display: flex;
    gap: 1.775em;
    max-width: min-content;
    margin: 0 auto;
  }

  > p {
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Work Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

export function Footer () {
  return (
    <FooterWrapper id='fale-conosco'>
      <LogoWraper>
        <a href='/'>
          <Logo />
        </a>
      </LogoWraper>

      <Links>
        <LinkContainer>
          <h5>Localização</h5>

          <ul>
            <li>Av. Brg. Faria Lima, 1422</li>
            <li>São Paulo - SP</li>
          </ul>
        </LinkContainer>

        <LinkContainer>
          <h5>Fale conosco</h5>

          <ul>
            <li>(22) 4442-0126</li>
            <li>info@digihouse.com</li>
          </ul>
        </LinkContainer>

        <LinkContainer>
          <h5>Políticas</h5>

          <ul>
            <li>Direitos autorais</li>
            <li>Termos de uso</li>
            <li>Políticas de Privacidade</li>
          </ul>
        </LinkContainer>
      </Links>

      <StoreButtons />

      <Socials>
        <div>
          <a href='/'>
            <FBLogo />
          </a>
          <a href='/'>
            <TwitterLogo />
          </a>
          <a href='/'>
            <InstagramLogo />
          </a>
        </div>

        <p>
          <CopyrightIcon />
          Copyright 2021. All Right Reserved
        </p>
      </Socials>

      <UpButton onClick={() => scroll.scrollToTop({ duration: 100, smooth: 'easeInOutQuint' })}>
        <UpIcon />
      </UpButton>
    </FooterWrapper>
  )
}

function StoreButtons () {
  return (
    <StoreWrapper>
      <button>
        <img src={AppleStore} alt='Apples store' />
      </button>

      <button>
        <img src={GoogleStore} alt='Google store' />
      </button>
    </StoreWrapper>
  )
}

const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    width: min-content;
    margin: 0 auto;
  }
`

const UpButton = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    width: min-content;
    margin: 0 auto;
`
