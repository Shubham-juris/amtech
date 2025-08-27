import React from 'react'
import { ProductHero } from '../components/productscomponents/ProductHero'
import { ProductCategories } from '../components/productscomponents/ProductCategories'
import { FeaturedProducts } from '../components/productscomponents/FeaturedProducts'
import { WhyChooseUs } from '../components/productscomponents/WhyChooseUs'
import { ExportMarkets } from '../components/productscomponents/ExportMarkets'
import { ProcessSection } from '../components/productscomponents/ProcessSection'
import { ProductCTA } from '../components/productscomponents/ProductCTA'

const ProductsPage = () => {
  return (
    <>
     <ProductHero/> 
     <ProductCategories/>
     <FeaturedProducts/>
     <WhyChooseUs/>
     <ExportMarkets/>
     <ProcessSection/>
     <ProductCTA/>
    </>
  )
}

export default ProductsPage
