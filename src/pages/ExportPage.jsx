import React from 'react'
import { ExportHero } from '../components/exportComponents/ExportHero'
import { ExportStats } from '../components/exportComponents/ExportStats'
import { ExportMarkets } from '../components/exportComponents/ExportMarkets'
import { ExportProcess } from '../components/exportComponents/ExportProcess'
import { ExportProducts } from '../components/exportComponents/ExportProducts'
import { CallToActionExport } from '../components/exportComponents/CallToActionExport'

const ExportPage = () => {
  return (
    <>
     <ExportHero/>
     <ExportStats/>
     <ExportMarkets/>
     <ExportProcess/>
     <ExportProducts/> 
     <CallToActionExport/>
    </>
  )
}

export default ExportPage
