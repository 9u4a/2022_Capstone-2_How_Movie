import { AppProps } from 'next/app';
import React from 'react';
import Header from './header';

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {children}
    </>
  );
};

export default Layout;
