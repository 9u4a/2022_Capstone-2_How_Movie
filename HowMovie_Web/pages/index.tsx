import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import MovieDetail from '../components/MovieDetail';
import MainPosters from '../components/MainPosters';
import MovieList from '../components/MovieList';

const Home: NextPage = () => {
  const [detailOpen, setDetailOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {detailOpen && <MovieDetail setDetailOpen={setDetailOpen} />}
      <MainPosters />
      {/* <div className="absolute top-[75%] md:top-[80%] lg:top-[85%] w-full "> */}
      <div className="">
        <MovieList listType="top" setDetailOpen={setDetailOpen} />
        <MovieList listType="new" setDetailOpen={setDetailOpen} />
      </div>
    </div>
  );
};

export default Home;
