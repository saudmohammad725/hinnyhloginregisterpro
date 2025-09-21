import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSections from '../components/InfoSections'
import FeaturesSection from '../components/FeaturesSection'
import GallerySection from '../components/GallerySection'
import SimpleLoginSection from '../components/SimpleLoginSection'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <InfoSections />
      <FeaturesSection />
      <GallerySection />
      <SimpleLoginSection />
    </div>
  )
}

export default HomePage