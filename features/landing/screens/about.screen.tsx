import Image from 'next/image';
import { EngineeringSection } from '../components/about-us/engineering-section';
import { PerformanceSection } from '../components/about-us/performance-section';
import { CommitmentSection } from '../components/about-us/commitment-section';
import { ProductRangeSection } from '../components/home/product-range-section';
import { FeaturesSection } from '../components/home/feature-section';

const features = [
  {
    id: 1,
    icon: <Image src='/icons/home/rectangle-barcode.png' alt='Rectangle Barcode' width={48} height={48} className='w-10 h-10 sm:w-12 sm:h-12' />,
    title: 'Laser-Point Accuracy',
    description: 'Our ±0.01mm tolerance eliminates stripping issues, ensuring your machines run at max speed without interruption.',
  },
  {
    id: 2,
    icon: <Image src='/icons/home/clock.png' alt='Clock' width={48} height={48} className='w-10 h-10 sm:w-12 sm:h-12' />,
    title: 'Next-Day Tooling',
    description: 'Minimize downtime. Order standard configurations by 2:00 PM for next-day delivery.',
  },
  {
    id: 3,
    icon: <Image src='/icons/home/object-group.png' alt='Object Group' width={48} height={48} className='w-10 h-10 sm:w-12 sm:h-12' />,
    title: 'CAD-Integrated Design',
    description: 'Upload your DXF or PDF. We optimize your layouts to ensure maximum material yield and zero waste.',
  },
];

const AboutScreen = () => {
  return (
    <div>
      <EngineeringSection />
      <FeaturesSection isBgSecondary={true} features={features} />
      <CommitmentSection />
      <ProductRangeSection />
    </div>
  );
};

export default AboutScreen;
