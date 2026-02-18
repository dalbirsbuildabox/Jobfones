'use client';

import Image from 'next/image';

export function CommitmentSection() {
  return (
    <section className='py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>
          {/* Left Column - Text Content */}
          <div className='space-y-[20px]'>
            <div>
              <h2 className='text-[60px] font-[500] text-black'>
                Our <span className='text-primary'>Commitment.</span>
              </h2>
            </div>

            <div className='space-y-4 text-black'>
              <p className='text-[22px] font-[300] leading-relaxed'>
                We continuously invest in advanced technology, refined processes, and engineering expertise to stay ahead of industry demands.
              </p>

              <p className='text-[22px] font-[300] leading-relaxed'>Because performance isn't optional. It's engineered.</p>
            </div>

            <div>
              <p className='text-[22px] font-[300] leading-relaxed'>
                <span className='font-[500] text-black'>Great — </span>
                here's a High-conversion, B2B-optimized Contact Us page designed to generate serious inquiries and technical quote requests.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className='flex justify-center md:justify-end'>
            <div className='w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src='/images/landing/about-us/commitment.png'
                alt='Professional hands working together in technical setting'
                width={500}
                height={375}
                className='w-full h-full object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
