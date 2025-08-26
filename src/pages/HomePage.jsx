import React from 'react'
import HeroSection from '../components/homecomponents/HeroSection'
import AboutSection from '../components/homecomponents/AboutSection'
import ProductsSection from '../components/homecomponents/ProductSection'
import WhyChooseUs from '../components/homecomponents/WhyChooseus'
import ContactSection from '../components/homecomponents/ContactSection'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProductsSection/>
      <WhyChooseUs/>
      <ContactSection/>
    </>
  )
}

export default HomePage
