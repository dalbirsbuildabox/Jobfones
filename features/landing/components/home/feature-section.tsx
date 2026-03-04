'use client';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type FeaturesSectionData = {
  title: React.ReactNode;
  description: string;
  features: Feature[];
};

export function FeaturesSection({ isBgSecondary, features: sectionData }: { isBgSecondary?: boolean; features: FeaturesSectionData }) {
  return (
    <section className={`w-full ${isBgSecondary ? 'bg-secondary' : 'bg-white'}`}>
      {/* Header and Content Grid */}
      <div className='py-12 sm:py-20 md:py-28 container mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16'>
          {/* Left Column - Heading and Description */}
          <div className='place-content-end'>{sectionData.title}</div>

          {/* Right Column - Empty for spacing in two-column layout */}
          <div className='place-content-center'>
            <p className='font-light text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed'>{sectionData.description}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
          {sectionData.features.map((feature: Feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`${isBgSecondary ? 'bg-white' : 'bg-secondary'} rounded-[16px] p-5 sm:p-6 md:p-[32px] hover:shadow-lg transition-shadow duration-300 sm:space-y-[20px] lg:space-y-[16px]`}
              >
                {/* Icon */}
                <div>{Icon}</div>

                {/* Title */}
                <h3 className='text-lg sm:text-xl md:text-[26px] font-medium'>{feature.title}</h3>

                {/* Description */}
                <p className='text-black/70 text-sm sm:text-base md:text-[21px] font-light leading-relaxed'>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
