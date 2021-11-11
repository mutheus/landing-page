import styled, { css } from 'styled-components/macro'
import { ReactComponent as Logo } from 'shared/assets/brand-logo.svg'
import { Button } from 'shared/styles'
import { Link } from 'react-scroll'

type NavWrapperProps = {
  isMenuOpen: boolean
}

export const HeaderWrapper = styled.header`
  display: flex;
  place-items: center;
  padding: 1.25em;
  position : fixed;
  top : 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 110;
  width: 100vw;
`

export const LogoWrapper = styled.a`
  color: inherit;
  text-decoration: none;
`

export const LogoSvg = styled(Logo)`
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

export const NavWrapper = styled.div<NavWrapperProps>`${({ isMenuOpen, theme }) => css`
  display: ${isMenuOpen ? 'flex' : 'none'};

  @media (max-width: 800px) {
    position: absolute;
    background-color: ${theme.colors.white};
    left: 0;
    top: 0;
    min-height: 100vh;
    min-width: 100vw;
  }

  @media (min-width: 800px) {
    display: initial;
    margin-left: auto;
  }
`}`

export const Navbar = styled.nav`${({ theme }) => css`
  @media (max-width: 800px) {
    width: 100%;
    padding: 4em 2em;
  }

  display: flex;
  flex-direction: column;
  gap: 2em;

  .active {
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;

    a {
      min-width: max-content;
      color: ${theme.colors.text};
      text-decoration: none;
    }
  }
`}`

export const NavButton = styled(Button)`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 133px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
`

export const MenuBtn = styled.button`
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

export const NavLink = styled(Link)`
  cursor: pointer;
`
