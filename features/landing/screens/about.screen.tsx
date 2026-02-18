import React from 'react';
import { EngineeringSection } from '../components/about-us/engineering-section';
import { PerformanceSection } from '../components/about-us/performance-section';
import { CommitmentSection } from '../components/about-us/commitment-section';
import { ProductRangeSection } from '../components/home/product-range-section';

const AboutScreen = () => {
  return (
    <div>
      <EngineeringSection />
      <PerformanceSection />
      <CommitmentSection />
      <ProductRangeSection />
    </div>
  );
};

export default AboutScreen;
