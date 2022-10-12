import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const BackgroundMovie: NextPage = () => {
  const [backgroundPath, setBackgroundPath] = useState('');
  useEffect(() => {
    const fetchBackgroundPath = async () => {
      try {
      } catch (e) {}
    };
  }, []);
  // const backgroundPath = 'TBvWsIEdkGQ';

  // setBackgroundPath('TBvWsIEdkGQ');
  return (
    <>
      <div className="relative w-full pb-[55%] max-h-[350px] bg-black rounded-t-xl">
        <iframe
          className="w-full h-full absolute from-black mt-[10px]"
          src={`https://www.youtube.com/embed/${backgroundPath}?autoplay=1&fs=0&modestbranding=1&disablekb=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
};

export default BackgroundMovie;
