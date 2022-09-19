import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BackgroundMovie from './backgroundMovie';

const Home: NextPage = () => {
  return (
    <>
      <BackgroundMovie />
      <div>HowMovie</div>
    </>
  );
};

export default Home;
