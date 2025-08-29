import React from 'react'
import { FeaturedProducts } from '../components/productscomponents/FeaturedProducts'
import { WhyChooseUs } from '../components/productscomponents/WhyChooseUs'
import { ExportMarkets } from '../components/productscomponents/ExportMarkets'
import ProcessSection  from '../components/productscomponents/ProcessSection'
import { ProductCTA } from '../components/productscomponents/ProductCTA'
import ProductsSection from '../components/productscomponents/ProductsSection'
import ProductHero from '../components/productscomponents/ProductHero'

const ProductsPage = () => {
  return (
    <>
     <ProductHero/> 
     <ProductsSection/>
     <FeaturedProducts/>
     <WhyChooseUs/>
     <ExportMarkets/>
     <ProcessSection/>
     <ProductCTA/>
    </>
  )
}

export default ProductsPage
