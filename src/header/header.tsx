import { ReactComponent as MenuIcon } from './assets/bars.svg'
import { useState } from 'react'
import * as S from './styles'

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper href='/'>
        <S.LogoSvg />
      </S.LogoWrapper>

      <S.NavWrapper isMenuOpen={isMenuOpen}>
        <S.Navbar>
          <S.NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='home'
            activeClass='active'
            spy
            smooth
            duration={100}
          >
            Home
          </S.NavLink>
          <S.NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='quem-somos'
            spy
            smooth
            duration={100}
          >
            Quem somos
          </S.NavLink>
          <S.NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='planos'
            spy
            smooth
            duration={100}
          >
            Planos
          </S.NavLink>
          <S.NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='fale-conosco'
            spy
            smooth
            duration={100}
          >
            Fale conosco
          </S.NavLink>
          <S.NavButton>Entrar</S.NavButton>
        </S.Navbar>
      </S.NavWrapper>

      <S.MenuBtn
        onClick={() => setIsMenuOpen(menu => !menu)}
      >
        <MenuIcon />
      </S.MenuBtn>
    </S.HeaderWrapper>
  )
}
