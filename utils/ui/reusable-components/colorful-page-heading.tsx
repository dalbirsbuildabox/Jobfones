import React from 'react';

const style = {
  fontFamily: 'Hoss Sharp',
  fontWeight: 800,
  fontStyle: 'Heavy',
  fontSize: '260px',
  leadingTrim: 'NONE',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: 'center',
};

export function GradientHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center justify-center'>
      <h1
        style={{
          fontWeight: '1000 !important',
          fontStyle: 'Heavy',
          fontSize: '260px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
        }}
      >
        <span className='bg-gradient-to-r from-primary via-black to-black bg-clip-text text-transparent'>{children}</span>
      </h1>
    </div>
  );
}
