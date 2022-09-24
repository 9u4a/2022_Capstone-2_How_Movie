import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

export type propsType = {
  type: string;
};

const MovieList = ({ type }: propsType) => {
  console.log(type);
  return (
    <div className="relative z-20">
      {/* <h1 className="px-[30px] font-semibold drop-shadow-lg">
        {type === 'top' ? 'Top 10' : '최신 영화'}
      </h1> */}
      {type === 'top' ? (
        <h1 className="px-[30px] font-semibold drop-shadow">Top 10</h1>
      ) : (
        <h2 className="px-[30px] font-semibold drop-shadow">최신 영화</h2>
      )}
      <div className="mb-[-50px] px-[30px] flex w-full snap-x snap-mandatory overflow-x-scroll z-20 bg-gradient-to-b from-[trasparent] via-black/80 to-[#141414]/80 space-x-5 scrollbar-hide">
        <div className="relative snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="152"
            height="216"
            alt="이미지"
            className="relative"
          />
          {type === 'top' && (
            <h1 className="relative z-30 ml-[10px] top-[-230px] italic font-semibold drop-shadow">
              1
            </h1>
          )}
        </div>
        <div className="relative snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="152"
            height="216"
            alt="이미지"
            className="relative"
          />
          {type === 'top' && (
            <h1 className="relative z-30 ml-[10px] top-[-230px] italic font-semibold drop-shadow">
              1
            </h1>
          )}
        </div>
        <div className="relative snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="152"
            height="216"
            alt="이미지"
            className="relative"
          />
          {type === 'top' && (
            <h1 className="relative z-30 ml-[10px] top-[-230px] italic font-semibold drop-shadow">
              1
            </h1>
          )}
        </div>
        <div className="relative snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="152"
            height="216"
            alt="이미지"
            className="relative"
          />
          {type === 'top' && (
            <h1 className="relative z-30 ml-[10px] top-[-230px] italic font-semibold drop-shadow">
              1
            </h1>
          )}
        </div>
        <div className="relative snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="152"
            height="216"
            alt="이미지"
            className="relative"
          />
          {type === 'top' && (
            <h1 className="relative z-30 ml-[10px] top-[-230px] italic font-semibold drop-shadow">
              1
            </h1>
          )}
        </div>
        <div className="relative snap-center shrink-0">
          <Image
            src="/asset/image/image 2.png"
            width="152"
            height="216"
            alt="이미지"
            className="relative"
          />
          {type === 'top' && (
            <h1 className="relative z-30 ml-[10px] top-[-230px] italic font-semibold drop-shadow">
              1
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
