'use client';

import React from 'react';
import { BarChart3, Clock, Box } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: BarChart3,
      title: 'Laser-Point Accuracy',
      description: 'Our 10.0mm tolerance eliminates striping issues, ensuring your machines run at max speed without interruption.',
    },
    {
      id: 2,
      icon: Clock,
      title: 'Next-Day Tooling',
      description: 'Minimize downtime. Order standard configurations by 2:00 PM for next-day delivery.',
    },
    {
      id: 3,
      icon: Box,
      title: 'CAD-Integrated Design',
      description: 'Upload your DWG or PDF, we optimize your layouts to ensure maximum material yield and zero waste.',
    },
  ];

  return (
    <section className='w-full py-12 sm:py-20 md:py-28 container mx-auto px-4 sm:px-6'>
      {/* Header and Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16'>
        {/* Left Column - Heading and Description */}
        <div className='place-content-end'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold mb-4 sm:mb-6 leading-tight'>
            Engineered for
            <br />
            <span className='text-primary'>Performance.</span>
          </h2>
        </div>

        {/* Right Column - Empty for spacing in two-column layout */}
        <div className='place-content-center'>
          <p className='font-[300] text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed'>
            Beyond just making dies, we optimize your production. Job Formes combines ultra-precise tolerances with rapid turnaround to keep your
            machines running at peak efficiency.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.id} className='bg-secondary rounded-[16px] p-5 sm:p-6 md:p-[32px] hover:shadow-lg transition-shadow duration-300 space-y-3 sm:space-y-[16px]'>
              {/* Icon */}
              <div>
                <Icon size={32} className='text-primary stroke-[1.5]' />
              </div>

              {/* Title */}
              <h3 className='text-lg sm:text-xl font-bold text-gray-900'>{feature.title}</h3>

              {/* Description */}
              <p className='text-gray-700 text-sm leading-relaxed'>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
