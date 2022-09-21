import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BackgroundMovie from './BackgroundMovie';
import MovieList from './MovieList';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <BackgroundMovie />
      <div className="absolute top-[60%] w-full h-full">
        <MovieList />
        <div>HowMovie</div>
      </div>
    </div>
  );
};

export default Home;
