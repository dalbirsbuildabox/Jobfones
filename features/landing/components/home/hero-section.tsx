'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className='relative w-full h-screen overflow-hidden bg-black'>
      {/* Video Background */}
      <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover'>
        <source src='/videos/landing/home/banner.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))' }}
      />

      {/* Hero Content - full width on tablet/laptop so no empty strip */}
      <div className='w-full relative z-10 h-full flex flex-col items-start justify-end py-8 sm:py-12 md:py-[60px] container mx-auto px-4 sm:px-6 box-border'>
        <div className='max-w-5xl w-full min-w-0'>
          <div className='max-w-2xl'>
            {/* Heading */}
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold mb-4 sm:mb-6 leading-tight'>
              Engineering the <span className='text-primary'>Edge of Perfection.</span>
            </h1>
          </div>

          {/* Description */}
          <p className='text-gray-200 text-sm sm:text-base md:text-lg lg:text-[22px] w-full mb-6 sm:mb-8 leading-relaxed max-w-xl'>
            High-performance cutting formes for the packaging and print industry. Precision-tooled in Australia for Boost, Heidelberg, and
            custom-flatbed systems.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
            <button className='bg-primary hover:bg-orange-600 text-white text-sm sm:text-base font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition'>
              Request a Technical Quote
            </button>
            <button
              className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-primary transition shrink-0'
              aria-label='Learn more'
            >
              <ArrowRight size={22} className='sm:w-6 sm:h-6' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
