import Image from 'next/image';
import { EngineeringSection } from '../components/about-us/engineering-section';
import { PerformanceSection } from '../components/about-us/performance-section';
import { CommitmentSection } from '../components/about-us/commitment-section';
import { ProductRangeSection } from '../components/home/product-range-section';
import { FeaturesSection } from '../components/home/feature-section';

const FEATURES_DATA = {
  title: (
    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold mb-4 sm:mb-6 leading-tight'>
      Built for
      <br />
      <span className='text-primary'>Performance.</span>
    </h2>
  ),
  description: 'We go beyond standard die manufacturing. Our solutions are designed to optimize your workflow and reduce downtime.',
  features: [
    {
      id: 1,
      icon: <Image src='/icons/home/rectangle-barcode.png' alt='Rectangle Barcode' width={48} height={48} className='w-fit h-fit' />,
      title: 'Laser-Point Accuracy',
      description: 'Our ±0.01mm tolerance eliminates stripping issues, ensuring your machines run at max speed without interruption.',
    },
    {
      id: 2,
      icon: <Image src='/icons/home/clock.png' alt='Clock' width={48} height={48} className='w-fit h-fit' />,
      title: 'Next-Day Tooling',
      description: 'Minimize downtime. Order standard configurations by 2:00 PM for next-day delivery.',
    },
    {
      id: 3,
      icon: <Image src='/icons/home/object-group.png' alt='Object Group' width={48} height={48} className='w-fit h-fit' />,
      title: 'CAD-Integrated Design',
      description: 'Upload your DXF or PDF. We optimize your layouts to ensure maximum material yield and zero waste.',
    },
  ],
};

const AboutScreen = () => {
  return (
    <div>
      <EngineeringSection />
      <FeaturesSection isBgSecondary={true} features={FEATURES_DATA} />
      <CommitmentSection />
      <ProductRangeSection />
    </div>
  );
};

export default AboutScreen;
