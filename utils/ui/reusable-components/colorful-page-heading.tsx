import React from 'react';

export function GradientHeading({ children, textSize }: { children: React.ReactNode; textSize: string }) {
  return (
    <div className='flex items-center justify-center'>
      <h1>
        <span className={`bg-linear-to-r from-primary to-black bg-clip-text text-transparent font-heavy ${textSize}`}>{children}</span>
      </h1>
    </div>
  );
}
