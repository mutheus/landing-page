import { Hero } from 'hero'
import { BrandSlider } from 'brand-slider'
import { Benefits } from 'benefits'
import { Details } from 'details'
import { Plans } from 'plans'
import { Testimonials } from 'testimonials'
import { AppSection } from 'app-section'
import { Footer } from 'footer'
import { Header } from 'header'
import styled from 'styled-components'

const Main = styled.main`
  overflow: hidden;
`

export function App () {
  return (
    <Main>
      <Header />
      <Hero />
      <BrandSlider />
      <Benefits />
      <Details />
      <Plans />
      <Testimonials />
      <AppSection />
      <Footer />
    </Main>
  )
}
