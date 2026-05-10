import React, { Suspense, lazy } from 'react'
import Hero from './components/Hero/Hero'

const Stats = lazy(() => import('./components/Stats/Stats'))
const About = lazy(() => import('./components/About/About'))
const Features = lazy(() => import('./components/Features/Features'))
const Steps = lazy(() => import('./components/Steps/Steps'))
const Pricing = lazy(() => import('./components/Pricing/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'))
const CTA = lazy(() => import('./components/CTA/CTA'))
const Team = lazy(() => import('./components/Team/Team'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))
import './App.css'

export default function App() {
  return (
    <main className="app" id="main-content">
      <Hero />
      <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
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
      </Suspense>
    </main>
  )
}
