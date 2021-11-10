import styled from 'styled-components/macro'
import { ReactComponent as Logo } from 'shared/assets/brand-logo.svg'
import { ReactComponent as MenuIcon } from './assets/bars.svg'
import { Button } from 'shared/styles'
import { Link } from 'react-scroll'

const HeaderWrapper = styled.header`
  display: flex;
  place-items: center;
  padding: 1.25em;
  position : fixed;
  top : 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
  width: 100%;

  *:last-child {
    margin-left: auto;
  }
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

const NavWrapper = styled.div`
  display: none;

  nav {
    display: flex;
    flex-direction: column;
    gap: 2em;

    .active {
      color: ${({ theme }) => theme.colors.primary};
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
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
      }
    }
  }
`

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
  background-color: transparent;
  border: none;

  @media (min-width: 800px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  cursor: pointer;
`

export function Header () {
  return (
    <HeaderWrapper>
      <LogoWrapper href='/'>
        <LogoSvg />
      </LogoWrapper>

      <NavWrapper>
        <nav>
          <NavLink to='home' activeClass='active' spy smooth duration={100}>Home</NavLink>
          <NavLink to='quem-somos' spy smooth duration={100}>Quem somos</NavLink>
          <NavLink to='planos' spy smooth duration={100}>Planos</NavLink>
          <NavLink to='fale-conosco' spy smooth duration={100}>Fale conosco</NavLink>
          <NavButton>Entrar</NavButton>
        </nav>
      </NavWrapper>

      <MenuBtn>
        <MenuIcon />
      </MenuBtn>
    </HeaderWrapper>
  )
}
