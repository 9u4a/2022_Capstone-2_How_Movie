import { NextPage } from 'next';
import React from 'react';

const BackgroundMovie: NextPage = () => {
  return (
    <>
      <div className="relative w-full pb-[55%]">
        <iframe
          className="w-full h-full max-h-[350px] absolute bg-gradient-to-b from-gray-900"
          src="https://www.youtube.com/embed/g4qQXXtaMqc?autoplay=1&fs=0&modestbranding=1&disablekb=1&controls=0&amp;playlist=g4qQXXtaMqc"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
};

export default BackgroundMovie;
