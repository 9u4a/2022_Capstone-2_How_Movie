import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import testAPI from '../pages/api/testAPI.json';

type MovieDetailProps = {
  setDetailOpen: (param: boolean) => void;
  setCurrID: (param: number) => void;
  type: string;
};
type listType = {
  id: number;
  image: string;
};

function MovieList({ type, setDetailOpen, setCurrID }: MovieDetailProps) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const listBox: listType[] = [
    {
      id: 1,
      image: '/asset/image/image 2.png',
    },
    {
      id: 2,
      image: '/asset/image/image 2.png',
    },
    {
      id: 3,
      image: '/asset/image/image 2.png',
    },
    {
      id: 4,
      image: '/asset/image/image 2.png',
    },
    {
      id: 5,
      image: '/asset/image/image 2.png',
    },
  ];

  const showDetail = () => {
    setDetailOpen(true);
  };

  return (
    <div className="relative z-20">
      {/* <h1 className="px-[30px] font-semibold drop-shadow-lg">
        {type === 'top' ? 'Top 10' : '최신 영화'}
      </h1> */}
      {type === 'top' ? (
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
                  setCurrID(e.id);
                }}
              >
                <Image
                  src={baseUrl + e.poster_path}
                  alt="이미지"
                  layout="fill"
                  objectFit="contain"
                  className="relative"
                />
                {type === 'top' && (
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
