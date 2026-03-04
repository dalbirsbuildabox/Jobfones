import Image from 'next/image';
import { HeroSection } from '../components/home/hero-section';
import { FeaturesSection } from '../components/home/feature-section';
import { OperationalConfidenceSection } from '../components/home/operation-confidence-section';
import { IndustryPrecisionSection } from '../components/home/industry-precision-section';
import { ProductRangeSection } from '../components/home/product-range-section';

const features = {
  title: (
    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold mb-4 sm:mb-6 leading-tight'>
      Engineered for
      <br />
      <span className='text-primary'>Performance.</span>
    </h2>
  ),
  description: 'Beyond just making dies, we optimize your production. Job Formes combines ultra-precise tolerances with rapid turnaround to keep your machines running at peak efficiency.',
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
      description: 'Upload your DWG or PDF, we optimize your layouts to ensure maximum material yield and zero waste.',
    },
  ],
};

const HomeScreen = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroSection />
      <FeaturesSection isBgSecondary={false} features={features} />
      <OperationalConfidenceSection />
      <IndustryPrecisionSection />
      <ProductRangeSection />
    </div>
  );
};

export default HomeScreen;
