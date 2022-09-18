import { AppProps } from 'next/app';
import React from 'react';
import Header from './header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
