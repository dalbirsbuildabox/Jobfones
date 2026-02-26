'use client';

import Image from 'next/image';

export function OperationalConfidenceSection() {
  return (
    <section className='bg-secondary py-10 sm:py-16 md:py-24 px-4 sm:px-6 min-h-screen flex items-center'>
      <div className='container mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16'>
          {/* Left Content */}
          <div className='flex flex-col justify-start gap-5 sm:gap-6 md:gap-[32px]'>
            <div>
              <h2 className='text-3xl sm:text-[40px] md:text-5xl lg:text-[60px] font-bold text-gray-900 leading-tight'>
                Operational
                <br />
                <span className='text-primary'>Confidence.</span>
              </h2>
            </div>

            <div>
              <p className='text-black text-base sm:text-lg md:text-[22px] font-[300] leading-relaxed'>
                Technical precision is only half the story. We provide the reliability you need to eliminate production stress and meet every deadline
                with total confidence.
              </p>
            </div>

            {/* Feature List */}
            <div className='space-y-4 sm:space-y-[20px]'>
              {/* Feature 1 */}
              <div className='space-y-1 sm:space-y-[6px]'>
                <h3 className='text-lg sm:text-xl md:text-[26px] font-[500] text-black'>Zero-Defect Guarantee</h3>
                <p className='text-sm sm:text-base md:text-[21px] font-[300] text-black leading-relaxed'>
                  Every die undergoes a 20-point digital inspection before it leaves our floor. No surprises, just perfect results on the first
                  strike.
                </p>
              </div>

              {/* Feature 2 */}
              <div className='space-y-1 sm:space-y-[6px]'>
                <h3 className='text-lg sm:text-xl md:text-[26px] font-[500] text-black'>Real-Time Project Tracking</h3>
                <p className='text-sm sm:text-base md:text-[21px] font-[300] text-black leading-relaxed'>
                  Stay informed from CAD design to final delivery. Our transparent workflow ensures you always know the exact status of your tooling.
                </p>
              </div>

              {/* Feature 3 */}
              <div className='space-y-1 sm:space-y-[6px]'>
                <h3 className='text-lg sm:text-xl md:text-[26px] font-[500] text-black'>Expert Technical Support</h3>
                <p className='text-sm sm:text-base md:text-[21px] font-[300] text-black leading-relaxed'>
                  Gain direct access to our senior diemakers. Whether it's a complex substrate or a machine setting issue, we provide the answers you
                  need, fast.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className='flex flex-col items-center min-h-[280px] sm:min-h-[360px] lg:min-h-0'>
            <div
              className='w-full rounded-2xl sm:rounded-[32px] overflow-hidden shadow-lg flex flex-col justify-end min-h-[280px] sm:min-h-[360px] lg:min-h-full p-4 sm:p-6 md:p-[32px]'
              style={{
                backgroundImage: "url('/images/landing/home/oc-1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='w-full bg-white rounded-xl sm:rounded-[16px] p-3 sm:p-[16px] shadow-primary border'>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <div className='relative w-12 h-12 sm:w-[63px] sm:h-[63px] rounded-full overflow-hidden bg-gray-200 shrink-0'>
                    <Image src='/images/landing/home/oc-2.png' alt='Michael R.' fill className='object-cover' />
                  </div>

                  <div className='flex flex-col gap-1 sm:gap-[6px] min-w-0'>
                    <div>
                      <h4 className='text-sm sm:text-[16px] font-medium'>Michael R.</h4>
                      <p className='text-black/70 text-xs sm:text-[13px] font-light '>Production Manager</p>
                    </div>
                    <p className='text-black/70 text-xs sm:text-[13px] font-light italic'>
                      Job Formes has reduced our machine downtime by 15% this quarter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
