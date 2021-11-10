import { Hero } from 'hero'
import { BrandSlider } from 'brand-slider'
import { Benefits } from 'benefits'
import { Details } from 'details'
import { Plans } from 'plans'
import { Testimonials } from 'testimonials'
import { AppSection } from 'app-section'
import { Footer } from 'footer'
import { Header } from 'header'

export function App () {
  return (
    <main>
      <Header />
      <Hero />
      <BrandSlider />
      <Benefits />
      <Details />
      <Plans />
      <Testimonials />
      <AppSection />
      <Footer />
    </main>
  )
}
