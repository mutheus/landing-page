import styled, { css } from 'styled-components/macro'
import { ReactComponent as Logo } from 'shared/assets/brand-logo.svg'
import { ReactComponent as MenuIcon } from './assets/bars.svg'
import { Button } from 'shared/styles'
import { Link } from 'react-scroll'
import { useState } from 'react'

const HeaderWrapper = styled.header`
  display: flex;
  place-items: center;
  padding: 1.25em;
  position : fixed;
  top : 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
  width: 100%;
`

const LogoWrapper = styled.a`
  color: inherit;
  text-decoration: none;
`

const LogoSvg = styled(Logo)`
  .brand {
    display: none;
  }

  .bg-fill {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 600px) {
    .brand {
      display: initial;
    }
  }
`

type NavWrapperProps = {
  isMenuOpen: boolean
}

const NavWrapper = styled.div<NavWrapperProps>`${({ isMenuOpen, theme }) => css`
  display: ${isMenuOpen ? 'flex' : 'none'};

  @media (max-width: 800px) {
    position: absolute;
    background-color: ${theme.colors.white};
    left: 0;
    top: 0;
    min-height: 100vh;
    min-width: 100vw;

    nav {
      width: 100%;
      padding: 4em 2em;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2em;

    .active {
      color: ${theme.colors.primary};
      font-weight: 700;
    }
  }

  @media (min-width: 800px) {
    display: initial;
    margin-left: auto;

    nav {
      flex-direction: row;
      align-items: center;

      a {
        min-width: max-content;
        color: ${theme.colors.text};
        text-decoration: none;
      }
    }
  }
`}`

const NavButton = styled(Button)`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 133px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
`

const MenuBtn = styled.button`
  padding: 0.4em;
  margin: 0;
  margin-left: auto;
  background-color: transparent;
  border: none;
  z-index: 10;

  @media (min-width: 800px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  cursor: pointer;
`

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <LogoWrapper href='/'>
        <LogoSvg />
      </LogoWrapper>

      <NavWrapper isMenuOpen={isMenuOpen}>
        <nav>
          <NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='home'
            activeClass='active'
            spy
            smooth
            duration={100}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='quem-somos'
            spy
            smooth
            duration={100}
          >
            Quem somos
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='planos'
            spy
            smooth
            duration={100}
          >
            Planos
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(menu => !menu)}
            to='fale-conosco'
            spy
            smooth
            duration={100}
          >
            Fale conosco
          </NavLink>
          <NavButton>Entrar</NavButton>
        </nav>
      </NavWrapper>

      <MenuBtn
        onClick={() => setIsMenuOpen(menu => !menu)}
      >
        <MenuIcon />
      </MenuBtn>
    </HeaderWrapper>
  )
}
