'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();
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
        <div className='max-w-5xl w-full min-w-0 space-y-[24px]'>
          <div className='max-w-2xl'>
            {/* Heading */}
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold mb-4 sm:mb-6 leading-tight'>
              Engineering the <span className='text-primary'>Edge of Perfection.</span>
            </h1>
          </div>

          {/* Description */}
          <p className='text-gray-200 text-sm sm:text-base md:text-lg lg:text-[22px] w-full mb-6 sm:mb-8 leading-relaxed max-w-4xl'>
            High-performance cutting formes for the packaging and print industry. Precision-tooled in Australia for Boost, Heidelberg, and
            custom-flatbed systems.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-wrap items-center'>
            <button
              onClick={() => router.push('/contact-us')}
              className='cursor-pointer hidden lg:flex bg-primary hover:bg-primary/80 text-white text-base xl:text-[20px] font-medium px-5 xl:px-[40px] py-3 xl:py-[20px] rounded-full transition shrink-0 whitespace-nowrap'
            >
              Request a Technical Quote
            </button>
            <button
              className='cursor-pointer w-[40px] md:w-[50px] xl:w-[73px] h-[40px] md:h-[50px] xl:h-[73px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-primary transition shrink-0'
              aria-label='Learn more'
            >
              <Image src='/icons/home/arrow-up-right-primary.png' alt='Arrow Right' width={28} height={28} className='w-fit h-fit' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
