import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const MovieList: NextPage = () => {
  return (
    <div className="relative z-20">
      <h1 className="px-[30px] font-semibold drop-shadow-lg">Top 10</h1>
      <div className="px-[30px] flex w-full snap-x snap-mandatory overflow-x-scroll z-20 bg-gradient-to-b from-black to-[#141414] space-x-5">
        <div className="snap-center shrink-0">
          {/* <h1 className="absolute z-30">1</h1> */}
          <Image
            src="/asset/image/image 2.png"
            width="190"
            height="270"
            alt="이미지"
          />
        </div>
        <div className="snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="190"
            height="270"
            alt="이미지"
          />
        </div>
        <div className="snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="190"
            height="270"
            alt="이미지"
          />
        </div>
        <div className="snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="190"
            height="270"
            alt="이미지"
          />
        </div>
        <div className="snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="190"
            height="270"
            alt="이미지"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
