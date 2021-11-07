import styled from 'styled-components/macro'
import { Hero } from 'hero'
import { BrandSlider } from 'brand-slider'
import { Benefits } from 'benefits'
import { Details } from 'details'
import { Plans } from 'plans'

const Main = styled.main`
  overflow: hidden;
`

export function App () {
  return (
    <Main>
      <Hero />
      <BrandSlider />
      <Benefits />
      <Details />
      <Plans />
    </Main>
  )
}
