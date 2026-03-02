'use client';

import React from 'react';

import { Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Separator } from '../reusable-components/separator';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing with email:', email);
    setEmail('');
  };

  return (
    <footer className='bg-black text-white py-10 sm:py-16'>
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12'>
          {/* Left Column */}
          <div className='space-y-3 sm:space-y-[12px]'>
            {/* Logo and Brand */}
            <div className='flex items-center gap-2 sm:gap-[12px]'>
              <div className='w-10 h-10 sm:w-[60px] sm:h-[60px] bg-primary rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-2xl sm:text-[41px]'>J</span>
              </div>
              <span className='text-white text-xl sm:text-[29px]'>Job Formes</span>
            </div>

            {/* Heading */}
            <h2 className='text-3xl sm:text-[45px] font-bold leading-tight'>
              Engineering <span className='text-primary'>Excellence.</span>
            </h2>

            {/* Description */}
            <p className='text-gray-400 text-base sm:text-lg lg:text-[20px] font-[300] leading-relaxed'>
              Australia's premier destination for high-performance die-cutting tooling. We combine nearly four decades of technical heritage with
              modern precision to keep your production lines moving.
            </p>
          </div>

          {/* Right Column */}
          <div className='space-y-3 sm:space-y-[12px]'>
            {/* Email Subscription */}
            <form onSubmit={handleSubscribe}>
              <div className='flex flex-col sm:flex-row rounded-2xl sm:rounded-full p-[6px] bg-white gap-2 sm:gap-0 sm:h-[82px]'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='text-black placeholder-gray-500 text-base sm:text-[20px] font-[300] placeholder:text-base sm:placeholder:text-[20px] h-12 sm:h-full border-0 rounded-full px-4 sm:p-[20px] flex-1 min-w-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0'
                />
                <Button
                  type='submit'
                  className='bg-primary hover:bg-primary/80 h-12 sm:h-full w-full sm:w-[176px] text-white rounded-full py-3 sm:py-[20px] px-6 sm:px-[40px] text-base sm:text-[20px] font-[500] shrink-0'
                >
                  Subscribe
                </Button>
              </div>
            </form>

            {/* Newsletter Description */}
            <p className='text-secondary text-sm sm:text-[18px] font-[300] leading-relaxed'>
              Stay ahead of the curve. Get technical tooling updates, machine compatibility guides, and industry precision insights delivered to your
              inbox.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 mb-6 sm:mb-8'>
          {/* Social Media Icons */}
          <div className='flex gap-3 sm:gap-4'>
            <a
              href='#'
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full text-primary bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
              aria-label='Facebook'
            >
              <Facebook size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full text-primary bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
              aria-label='Instagram'
            >
              <Instagram size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full text-primary bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
              aria-label='Twitter'
            >
              <Twitter size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full text-primary bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
              aria-label='LinkedIn'
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div className='flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8'>
            <a href='#' className='text-secondary font-[400] hover:text-primary transition-colors text-sm sm:text-[20px]'>
              Home
            </a>
            <a href='#' className='text-secondary font-[400] hover:text-primary transition-colors text-sm sm:text-[20px]'>
              Products
            </a>
            <a href='#' className='text-secondary font-[400] hover:text-primary transition-colors text-sm sm:text-[20px]'>
              About Us
            </a>
            <a href='#' className='text-secondary font-[400] hover:text-primary transition-colors text-sm sm:text-[20px]'>
              Contact Us
            </a>
          </div>
        </div>
        <Separator />
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-4'>
          {/* Copyright */}
          <p className='text-secondary font-[300] transition-colors text-sm sm:text-[20px] text-center sm:text-left'>© Job Formes 2026</p>
          <div className='flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end'>
            <a href='#' className='text-secondary font-[300] hover:text-primary transition-colors text-sm sm:text-[20px] underline'>
              Privacy Policy
            </a>
            <a href='/terms' className='text-secondary font-[300] hover:text-primary transition-colors text-sm sm:text-[20px] underline'>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
