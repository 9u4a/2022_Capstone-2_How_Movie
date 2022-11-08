import { AppProps } from 'next/app';
import React from 'react';
import Header from './header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="mt-[50px]">{children}</div>
    </>
  );
};

export default Layout;
