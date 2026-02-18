'use client';

import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Able Standard Dieboard',
    image: '/images/landing/home/pr-1.png',
  },
  {
    id: 2,
    name: 'Premium Dieboard',
    image: '/images/landing/home/pr-2.png',
  },
  {
    id: 3,
    name: 'Steel Bonded Dieboard',
    image: '/images/landing/home/pr-3.png',
  },
  {
    id: 4,
    name: 'Lower Stripping Unit',
    image: '/images/landing/home/pr-4.png',
  },
  {
    id: 5,
    name: 'Steel-Top Lower Stripping Unit',
    image: '/images/landing/home/pr-5.png',
  },
  {
    id: 6,
    name: 'Dynamic Speed Stripper',
    image: '/images/landing/home/pr-6.png',
  },
  {
    id: 7,
    name: 'Lower Pin Rack',
    image: '/images/landing/home/pr-7.png',
  },
  {
    id: 8,
    name: 'Embossing / Braille',
    image: '/images/landing/home/pr-8.png',
  },
  {
    id: 9,
    name: 'Pertinax Counter',
    image: '/images/landing/home/pr-9.png',
  },
  {
    id: 10,
    name: 'Engraved Plate',
    image: '/images/landing/home/pr-10.png',
  },
  {
    id: 11,
    name: 'Blanker Upper',
    image: '/images/landing/home/pr-11.png',
  },
  {
    id: 12,
    name: 'Blanker Lower',
    image: '/images/landing/home/pr-12.png',
  },
  {
    id: 13,
    name: 'Blanker Lower',
    image: '/images/landing/home/pr-13.png',
  },
  {
    id: 14,
    name: 'Blanker Lower',
    image: '/images/landing/home/pr-14.png',
  },
  {
    id: 15,
    name: 'Blanker Lower',
    image: '/images/landing/home/pr-15.png',
  },
];

export function ProductRangeSection() {
  return (
    <section className='w-full bg-secondary py-10 sm:py-16 md:py-24'>
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Header Section */}
        <div className='text-center grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-[40px] md:text-5xl lg:text-[60px] font-bold text-gray-900 leading-tight'>
            Our <span className='text-primary'>Product Range</span>
          </h2>
          <p className='text-black text-base sm:text-lg md:text-[22px] font-[300] leading-relaxed'>
            Explore our precision-engineered tooling solutions. From foundational dieboards to automated stripping systems, every product is built to
            maximize your machine's performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-[48px]'>
          {products.map((product) => (
            <div key={product.id} className='group relative h-[180px] sm:h-[220px] md:h-[300px] overflow-hidden rounded-2xl sm:rounded-[32px]'>
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              />
              {/* Dark Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
              {/* Product Label */}
              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-[32px]'>
                <p className='text-white text-base sm:text-lg md:text-[24px] font-[500] leading-relaxed'>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
