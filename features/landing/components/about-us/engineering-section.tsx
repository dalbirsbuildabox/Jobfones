import Image from 'next/image';

export function EngineeringSection() {
  return (
    <section className='w-full bg-white px-6 py-12 md:px-12 md:py-20'>
      <div className='container mx-auto'>
        <div className='grid gap-8 md:grid-cols-2 md:gap-12 md:items-center'>
          {/* Left Content */}
          <div className='space-y-[20px]'>
            <div>
              <h1 className='text-4xl md:text-[60px] font-[400] leading-tight'>
                Engineering the <span className='text-primary'>Edge.</span>
              </h1>
            </div>

            <div className='space-y-[20px] text-foreground'>
              <p className='text-base md:text-[22px] font-[300] leading-relaxed'>
                At JOD Formes, we design and manufacture high-performance cutting forms for the packaging and print industry. Our focus is simple:
                precision, reliability, and production efficiency.
              </p>

              <p className='text-base md:text-[22px] font-[300] leading-relaxed'>
                Every tool we build is engineered to perform seamlessly within Bobst, Heidelberg, and custom flatbed systems — delivering consistent
                results at full speed. We understand that in your environment, every micron matters. Every second matters. Every sheet matters.
              </p>

              <p className='text-base md:text-[22px] font-[300] leading-relaxed'>That's why we engineer accordingly.</p>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative w-full h-full md:h-full'>
            <Image
              src='/images/landing/about-us/engineer.png'
              alt='Industrial cutting equipment with orange lighting'
              fill
              className='object-cover rounded-[32px]'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
