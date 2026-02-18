'use client';

import React from 'react';

const LaserPointIcon = () => (
  <svg className='w-12 h-12 text-orange-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='4' y='6' width='4' height='12' fill='currentColor' rx='1' />
    <rect x='10' y='6' width='4' height='12' fill='currentColor' rx='1' />
    <rect x='16' y='6' width='4' height='12' fill='currentColor' rx='1' />
    <line x1='6' y1='4' x2='6' y2='2' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    <line x1='12' y1='4' x2='12' y2='2' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    <line x1='18' y1='4' x2='18' y2='2' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const ClockIcon = () => (
  <svg className='w-12 h-12 text-orange-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
    <path d='M12 6V12L16 14' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const CADIcon = () => (
  <svg className='w-12 h-12 text-orange-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='3' y='3' width='18' height='18' stroke='currentColor' strokeWidth='2' rx='2' />
    <rect x='6' y='9' width='4' height='4' fill='currentColor' />
    <rect x='14' y='6' width='4' height='4' fill='currentColor' />
    <rect x='14' y='14' width='4' height='4' fill='currentColor' />
    <line x1='7' y1='15' x2='11' y2='15' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
}) => (
  <div className='bg-white p-[24px] rounded-[24px]'>
    <div>
      <Icon className='w-[48px] h-[48px] text-primary' />
    </div>
    <h3 className='text-[22px] font-[500] text-black'>{title}</h3>
    <p className='text-[22px] font-[300] leading-relaxed'>{description}</p>
  </div>
);

export const PerformanceSection = () => {
  return (
    <section className='w-full bg-secondary px-6 py-12 md:px-12 md:py-20'>
      <div className='container mx-auto space-y-[48px]'>
        {/* Header */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[32px]'>
          <div>
            <h2 className='text-[60px] font-[500] text-black'>
              Built for <span className='text-primary'>Performance.</span>
            </h2>
          </div>
          <p className='text-[22px] font-[300] leading-relaxed'>
            We go beyond standard die manufacturing. Our solutions are designed to optimize your workflow and reduce downtime.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <FeatureCard
            icon={LaserPointIcon}
            title='Laser-Point Accuracy'
            description='Our cutting-edge precision engineering ensures your production runs without interruption'
          />
          <FeatureCard
            icon={ClockIcon}
            title='Next-Day Tooling'
            description='Minimize downtime with our standard configurations by 200 PM for next-day delivery'
          />
          <FeatureCard
            icon={CADIcon}
            title='CAD-Integrated Design'
            description='Optimize your die layouts to ensure maximum material yield and zero waste'
          />
        </div>
      </div>
    </section>
  );
};
