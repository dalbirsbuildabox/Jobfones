import React from 'react';
import Header from './header';
import { Footer } from './footer';

const GlobalLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
