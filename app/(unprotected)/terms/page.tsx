import TermsScreen from '@/features/landing/screens/terms.screen';
import { GradientHeading } from '@/utils/ui/reusable-components/colorful-page-heading';
import React from 'react';

const TermsCondition = () => {
  return (
    <main className='pt-[88px] lg:pt-[160px] w-full text-black'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-10'>
        <GradientHeading textSize='text-[60px] lg:text-[80px] xl:text-[120px]'>Terms & Conditions</GradientHeading>
        <p className='text-base sm:text-lg lg:text-[24px] font-light text-black/70 text-center max-w-full mx-auto leading-relaxed'>
          Welcome to Job Formes. These Terms & Conditions govern your use of our website and the supply of our die-cutting tooling products and
          engineering services. By accessing our website or engaging our services, you agree to comply with these terms.{' '}
        </p>
        <div className='w-full h-[1px] bg-secondary' />
        <TermsScreen />
      </div>
    </main>
  );
};

export default TermsCondition;
