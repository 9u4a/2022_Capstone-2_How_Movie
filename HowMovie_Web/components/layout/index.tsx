import { AppProps } from 'next/app';
import React from 'react';
import Header from './header';

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="fixed w-full z-[999]">
        <Header />
      </div>
      {children}
    </>
  );
};

export default Layout;
