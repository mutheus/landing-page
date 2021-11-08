import styled from 'styled-components/macro'
import { Hero } from 'hero'
import { BrandSlider } from 'brand-slider'
import { Benefits } from 'benefits'
import { Details } from 'details'
import { Plans } from 'plans'
import { Testimonials } from 'testimonials'
import { AppSection } from 'app-section'

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
      <Testimonials />
      <AppSection />
    </Main>
  )
}
