import { NextPage } from 'next';
import React from 'react';

const BackgroundMovie: NextPage = () => {
  return (
    <>
      <div className="relative w-full pb-[56%]">
        <iframe
          className="w-full h-full absolute bg-gradient-to-b from-gray-900"
          src="https://www.youtube.com/embed/g4qQXXtaMqc?autoplay=1&mute=1&fs=0&modestbranding=1&disablekb=1&controls=0&iv_load_policy=3&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; muted; controls=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="absolute w-full pb-[56%] bg-gradient-to-b from-black via-transparent to-black z-10 opacity-60"></div>
      </div>
    </>
  );
};

export default BackgroundMovie;
