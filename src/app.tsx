import styled from 'styled-components/macro'
import { Hero } from 'hero'
import { BrandSlider } from 'brand-slider'
import { Benefits } from 'benefits'

const Main = styled.main`
  overflow: hidden;
`

export function App () {
  return (
    <Main>
      <Hero />
      <BrandSlider />
      <Benefits />
    </Main>
  )
}
