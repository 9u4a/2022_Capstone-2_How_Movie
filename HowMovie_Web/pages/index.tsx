import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import MovieDetail from '../components/MovieDetail';
import BackgroundMovie from '../components/BackgroundMovie';
import MainPosters from '../components/MainPosters';
import MovieList from '../components/MovieList';

const Home: NextPage = () => {
  const [detailOpen, setDetailOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      {detailOpen && <MovieDetail setDetailOpen={setDetailOpen} />}
      {/* <BackgroundMovie /> */}
      <MainPosters />
      {/* <div className="absolute top-[75%] md:top-[80%] lg:top-[85%] w-full "> */}
      <div className=" top-[75%] md:top-[80%] lg:top-[85%] w-full ">
        <MovieList type="top" setDetailOpen={setDetailOpen} />
        <MovieList type="new" setDetailOpen={setDetailOpen} />
      </div>
    </div>
  );
};

export default Home;
