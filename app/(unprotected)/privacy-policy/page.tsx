import PrivacyScreen from '@/features/landing/screens/privacy-screen';
import { GradientHeading } from '@/utils/ui/reusable-components/colorful-page-heading';

const PrivacyPolicyPage = () => {
  return (
    <main className='pt-[88px] xl:pt-[160px] w-full text-black'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-10'>
        <GradientHeading textSize='text-[60px] lg:text-[80px] xl:text-[120px]'>Privacy Policy</GradientHeading>
        <p className='text-base sm:text-lg lg:text-[24px] font-light text-black/70 text-center max-w-full mx-auto leading-relaxed'>
          At Job Formes, we are committed to protecting your privacy and handling your personal information in a safe and responsible manner. As
          Australia’s premier destination for high-performance die-cutting tooling, we value the trust our clients, suppliers, and partners place in
          us. <br /> This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in accordance with the Privacy
          Act 1988 (Cth) and the Australian Privacy Principles (APPs).
        </p>
        <div className='w-full h-[1px] bg-secondary' />
        <PrivacyScreen />
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
