'use client';

import { Package, Layers, Package2 } from 'lucide-react';
import Image from 'next/image';

export function IndustryPrecisionSection() {
  const industries = [
    {
      image: '/images/landing/home/ip-1.png',
      title: 'Folding Cartons High-Detail Accuracy.',
      description:
        'Engineered for the luxury, pharma, and cosmetic sectors. We deliver high-detail dies that ensure flawless creasing and lightning-fast stripping on high-speed folder-gluer.',
    },
    {
      image: '/images/landing/home/ip-2.png',
      title: 'Corrugated & POS Heavy-Duty Durability.',
      description:
        'Built for impact. Our tooling for point-of-sale displays and containers is designed to handle heavy flowing while maintaining structural integrity and crisp edges.',
    },
    {
      image: '/images/landing/home/ip-1.png',
      title: 'Gaskets & Industrial Beyond Paper & Board.',
      description:
        'Custom cutting solutions for non-traditional materials. We provide precision tooling for foam, rubber, plastics, and technical textiles, ensuring clean seals and exact dimensions.',
    },
  ];

  return (
    <section className='w-full bg-white py-10 sm:py-16 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Heading */}
        <div className='text-center mb-8 sm:mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-[40px] md:text-5xl lg:text-[60px] font-bold text-gray-900 leading-tight'>
            Industry-Specific <span className='text-primary'>Precision.</span>
          </h2>
          <p className='text-black text-base sm:text-lg md:text-[22px] font-[300] leading-relaxed mt-2 max-w-2xl mx-auto'>
            Purpose-built tooling designed for the unique demands of your vertical. From delicate pharmaceutical packaging to heavy-duty industrial
            gaskets.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-[60px]'>
          {industries.map((industry, index) => {
            return (
              <div key={index} className='flex flex-col items-center text-center space-y-3 sm:space-y-[16px]'>
                {/* Icon Container */}
                <div className='relative w-24 h-24 sm:w-[135px] sm:h-[135px] rounded-lg overflow-hidden shrink-0'>
                  <Image src={industry.image} alt={industry.title} width={500} height={500} className='w-full h-full object-contain' />
                </div>

                {/* Title */}
                <h3 className='mb-1 sm:mb-3 text-lg sm:text-xl md:text-[26px] font-[500] text-black'>{industry.title}</h3>

                {/* Description */}
                <p className='text-sm sm:text-base md:text-[21px] font-[300] text-black leading-relaxed'>{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
