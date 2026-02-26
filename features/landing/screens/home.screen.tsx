import React from 'react';
import { HeroSection } from '../components/home/hero-section';
import { FeaturesSection } from '../components/home/feature-section';
import { OperationalConfidenceSection } from '../components/home/operation-confidence-section';
import { IndustryPrecisionSection } from '../components/home/industry-precision-section';
import { ProductRangeSection } from '../components/home/product-range-section';

const HomeScreen = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroSection />
      <FeaturesSection />
      <OperationalConfidenceSection />
      <IndustryPrecisionSection />
      <ProductRangeSection />
    </div>
  );
};

export default HomeScreen;
