import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BackgroundMovie from './BackgroundMovie';
import MainPosters from './MainPosters';
import MovieList from './MovieList';

const Home: NextPage = () => {
  return (
    <div className="relative">
      {/* <BackgroundMovie /> */}
      <MainPosters />
      {/* <div className="absolute top-[75%] md:top-[80%] lg:top-[85%] w-full "> */}
      <div className=" top-[75%] md:top-[80%] lg:top-[85%] w-full ">
        <MovieList type="top" />
        <MovieList type="new" />
        <div>HowMovie</div>
      </div>
    </div>
  );
};

export default Home;
