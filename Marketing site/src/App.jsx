import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import Features from './components/Features/Features'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <section className="section--about">
        <Stats />
        <About />
      </section>
      <Features />
      <Steps />
      <Pricing />
      <Testimonials />
      <CTA />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
