import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BackgroundMovie from './BackgroundMovie';
import MovieList from './MovieList';
// import { propsType } from './index';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <BackgroundMovie />
      <div className="absolute top-[75%] w-full ">
        <MovieList type="top" />
        <MovieList type="new" />
        <div>HowMovie</div>
      </div>
    </div>
  );
};

export default Home;
