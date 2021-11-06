import { Hero } from 'hero'
import { BrandSlider } from 'brand-slider'
import styled from 'styled-components/macro'

const Main = styled.main`
  overflow: hidden;
`

export function App () {
  return (
    <Main>
      <Hero />
      <BrandSlider />
    </Main>
  )
}
