import styled from 'styled-components/macro'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { ReactComponent as MenuIcon } from './assets/bars.svg'

const HeaderWrapper = styled.header`
  display: flex;
  place-items: center;
  padding: 1.25em;

  *:last-child {
    margin-left: auto;
  }
`

const LogoWrapper = styled.a`
  color: inherit;
  text-decoration: none;

  svg {
    width: 3em;
    aspect-ratio: 1/1;
  }
`

const MenuBtn = styled.button`
  padding: 0.4em;
  margin: 0;
  background-color: transparent;
  border: none;
`

export function Header () {
  return (
    <HeaderWrapper>
      <LogoWrapper href='/'>
        <Logo />
      </LogoWrapper>

      <MenuBtn>
        <MenuIcon />
      </MenuBtn>
    </HeaderWrapper>
  )
}
