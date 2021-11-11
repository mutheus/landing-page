import { ReactComponent as Logo } from 'shared/assets/brand-logo.svg'
import { ReactComponent as FBLogo } from 'shared/assets/facebook-fill.svg'
import { ReactComponent as InstagramLogo } from 'shared/assets/instagram-fill.svg'
import { ReactComponent as TwitterLogo } from 'shared/assets/twitter-fill.svg'
import { ReactComponent as CopyrightIcon } from 'shared/assets/copyright-icon.svg'
import { ReactComponent as UpIcon } from 'shared/assets/up-icon.svg'
import { animateScroll as scroll } from 'react-scroll'
import * as S from './styles'
import { StoreButtons } from 'ui/store-buttons'

export function Footer () {
  return (
    <S.FooterWrapper id='fale-conosco'>
      <S.InfoContainer>
        <S.LogoWraper>
          <a href='/'>
            <Logo />
          </a>

          <StoreButtons />
        </S.LogoWraper>

        <S.Links>
          <S.LinkContainer>
            <h5>Localização</h5>

            <ul>
              <li>Av. Brg. Faria Lima, 1422</li>
              <li>São Paulo - SP</li>
            </ul>
          </S.LinkContainer>

          <S.LinkContainer>
            <h5>Fale conosco</h5>

            <ul>
              <li>(22) 4442-0126</li>
              <li>info@digihouse.com</li>
            </ul>
          </S.LinkContainer>

          <S.LinkContainer>
            <h5>Políticas</h5>

            <ul>
              <li>Direitos autorais</li>
              <li>Termos de uso</li>
              <li>Políticas de Privacidade</li>
            </ul>
          </S.LinkContainer>
        </S.Links>
      </S.InfoContainer>

      <StoreButtons />

      <S.SocialContainer>
        <S.Socials>
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
        </S.Socials>

        <S.UpButton onClick={() => scroll.scrollToTop({ duration: 100, smooth: 'easeInOutQuint' })}>
          <UpIcon />
        </S.UpButton>
      </S.SocialContainer>
    </S.FooterWrapper>
  )
}
