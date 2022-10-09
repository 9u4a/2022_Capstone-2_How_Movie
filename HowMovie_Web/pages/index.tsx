import type { NextPage } from 'next';
import { useState } from 'react';
import MovieDetail from '../components/MovieDetail';
import MainPosters from '../components/MainPosters';
import MovieList from '../components/MovieList';

const Home: NextPage = () => {
  const [detailOpen, setDetailOpen] = useState<boolean>(false);
  const [currID, setCurrID] = useState(0);
  return (
    <div className="relative">
      {detailOpen && (
        <MovieDetail setDetailOpen={setDetailOpen} currID={currID} />
      )}
      <MainPosters />
      <div className=" top-[75%] md:top-[80%] lg:top-[85%] w-full ">
        <MovieList
          type="top"
          setDetailOpen={setDetailOpen}
          setCurrID={setCurrID}
        />
        <MovieList
          type="new"
          setDetailOpen={setDetailOpen}
          setCurrID={setCurrID}
        />
      </div>
    </div>
  );
};

export default Home;
