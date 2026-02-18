'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 w-full transition-colors duration-200 ${scrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`}>
      <div className='flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 container mx-auto py-3 sm:py-4 lg:py-5 px-4 sm:px-6'>
        {/* Logo */}
        <div className='flex items-center gap-2 sm:gap-[12px] shrink-0 min-w-0'>
          <div className='w-10 h-10 sm:w-[60px] sm:h-[60px] bg-primary rounded-full flex items-center justify-center shrink-0'>
            <span className='text-white font-bold text-2xl sm:text-[41px]'>J</span>
          </div>
          <span className='text-white text-xl sm:text-[29px] truncate'>Job Formes</span>
        </div>

        {/* Desktop Navigation - only from lg when there's room for all items in one line */}
        <nav className='hidden flex-1 lg:flex justify-between items-center flex-nowrap gap-4 xl:gap-[20px] bg-white rounded-full py-3 px-4 xl:py-[24px] xl:px-[50px] shadow-primary max-w-xl xl:max-w-2xl mx-auto shrink min-w-0'>
          <Link href='#home' className='text-black text-sm xl:text-[20px] font-light hover:text-primary transition whitespace-nowrap shrink-0'>
            Home
          </Link>
          <Link href='#products' className='text-black text-sm xl:text-[20px] font-light hover:text-primary transition whitespace-nowrap shrink-0'>
            Products
          </Link>
          <Link href='/about-us' className='text-black text-sm xl:text-[20px] font-light hover:text-primary transition whitespace-nowrap shrink-0'>
            About Us
          </Link>
          <Link href='/contact-us' className='text-black text-sm xl:text-[20px] font-light hover:text-primary transition whitespace-nowrap shrink-0'>
            Contact Us
          </Link>
        </nav>

        {/* CTA + Mobile menu button: hamburger up to lg, then full CTA */}
        <div className='flex items-center gap-2 sm:gap-3 shrink-0'>
          <button
            type='button'
            aria-label='Toggle menu'
            className='lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition'
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className='hidden lg:flex bg-primary hover:bg-primary/80 text-white text-base xl:text-[20px] font-medium px-5 xl:px-[40px] py-3 xl:py-[20px] rounded-full transition shrink-0 whitespace-nowrap'>
            Request a Technical Quote
          </button>
          <button className='lg:hidden bg-primary hover:bg-primary/80 text-white text-sm font-medium px-4 py-2.5 rounded-full transition shrink-0'>
            Quote
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu - shown below lg (1024px) */}
      {mobileMenuOpen && (
        <nav
          className='absolute top-full left-4 right-4 mt-2 lg:hidden flex flex-col gap-1 bg-white rounded-2xl py-4 px-4 shadow-xl z-30'
          aria-label='Mobile navigation'
        >
          <Link
            href='#home'
            className='text-black text-lg font-light hover:text-primary transition py-2 px-3 rounded-lg hover:bg-secondary'
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href='#products'
            className='text-black text-lg font-light hover:text-primary transition py-2 px-3 rounded-lg hover:bg-secondary'
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href='/about-us'
            className='text-black text-lg font-light hover:text-primary transition py-2 px-3 rounded-lg hover:bg-secondary'
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href='#contact'
            className='text-black text-lg font-light hover:text-primary transition py-2 px-3 rounded-lg hover:bg-secondary'
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
