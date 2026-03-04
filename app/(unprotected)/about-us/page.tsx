import React from 'react';
import { GradientHeading } from '@/utils/ui/reusable-components/colorful-page-heading';
import AboutScreen from '@/features/landing/screens/about.screen';

const AboutUsPage = () => {
  return (
    <div className='pt-[88px] lg:pt-[200px]'>
      <div className='min-h-[50vh] place-content-center'>
        <GradientHeading textSize='text-[120px] lg:text-[200px] xl:text-[260px]'>ABOUT US</GradientHeading>
        <AboutScreen />
      </div>
    </div>
  );
};

export default AboutUsPage;
