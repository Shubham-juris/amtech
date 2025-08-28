import React from 'react'
import HeroSection from '../components/homecomponents/HeroSection'
import AboutSection from '../components/homecomponents/AboutSection'
import ProductsSection from '../components/homecomponents/ProductSection'
import WhyChooseUs from '../components/homecomponents/WhyChooseus'
import ContactSection from '../components/homecomponents/ContactSection'
import StatsSection from '../components/homecomponents/StatsSection'
import Testimonials from '../components/homecomponents/Testimonials'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProductsSection/>
      <WhyChooseUs/>
      <StatsSection/>
      <Testimonials/>
      <ContactSection/>
    </>
  )
}

export default HomePage
