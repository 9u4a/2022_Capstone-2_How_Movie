import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import testAPI from '../pages/api/testAPI.json';

type MovieDetailProps = {
  setDetailOpen: (param: boolean) => void;
  listType: string;
};

function MovieList({ listType, setDetailOpen }: MovieDetailProps) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  const showDetail = () => {
    setDetailOpen(true);
  };
  return (
    <div className="relative z-20">
      {listType === 'top' ? (
        <h1 className="px-[30px] font-semibold text-shadow-2xl">Top 10</h1>
      ) : (
        <h2 className="px-[30px] font-semibold text-shadow-2xl">최신 영화</h2>
      )}
      <div className="mb-[30px] px-[30px] flex w-full snap-x snap-mandatory overflow-x-scroll z-20 bg-gradient-to-b from-[trasparent] via-black/80 to-[#141414]/80 space-x-5 scrollbar-hide">
        {testAPI.result[0].popular?.map((e, i) => {
          return (
            <div key={i}>
              <div
                className="relative snap-center shrink-0 md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700 cursor-pointer"
                onClick={() => {
                  showDetail();
                }}
              >
                <Image
                  src={baseUrl + e.poster_path}
                  alt="이미지"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
                {listType === 'top' && (
                  <h1 className="relative z-30 ml-[10px] top-[-5px] italic font-semibold text-shadow-2xl">
                    {i + 1}
                  </h1>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
