import { NextPage } from 'next';
import React from 'react';

const BackgroundMovie: NextPage = () => {
  return (
    <>
      <div className="relative w-full pb-[55%]">
        <iframe
          className="w-full h-full absolute bg-gradient-to-b from-gray-900"
          src="https://www.youtube.com/embed/g4qQXXtaMqc?autoplay=1&mute=1&fs=0&modestbranding=1&disablekb=1&controls=0&amp;playlist=g4qQXXtaMqc&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="absolute w-full pb-[56%] bg-gradient-to-t from-gray-900/80 z-10"></div>
      </div>
    </>
  );
};

export default BackgroundMovie;
