import React from 'react';
import { GradientHeading } from '@/utils/ui/reusable-components/colorful-page-heading';
import AboutScreen from '@/features/landing/screens/about.screen';

const AboutUsPage = () => {
  return (
    <div className='pt-[88px] sm:pt-[150px]'>
      <div className='min-h-[50vh] place-content-center'>
        <GradientHeading>ABOUT US</GradientHeading>
        <AboutScreen />
      </div>
    </div>
  );
};

export default AboutUsPage;
