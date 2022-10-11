import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import testAPI from '../pages/api/testAPI.json';

export interface detailListType {
  backdrop_path: string;
  id: number;
  poster_path: string;
  title: string;
}
export interface listType extends Array<detailListType> {
  popular: detailListType;
  toprated: detailListType;
  nowplaying: detailListType;
  upcoming: detailListType;
  type: detailListType;
}

interface MovieDetailProps {
  setDetailOpen: (param: boolean) => void;
  setCurrID: (param: number) => void;
  type: any;
  listType: listType;
}

function MovieList({
  type,
  setDetailOpen,
  setCurrID,
  listType,
}: MovieDetailProps) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const showDetail = () => {
    setDetailOpen(true);
  };

  return (
    <div className="relative z-20">
      {type === 'toprated' ? (
        <h1 className="px-[30px] font-semibold text-shadow-2xl">Top 10</h1>
      ) : (
        <h2 className="px-[30px] font-semibold text-shadow-2xl">최신 영화</h2>
      )}
      <div className="mb-[30px] px-[30px] flex w-full snap-x snap-mandatory overflow-x-scroll z-20 bg-gradient-to-b from-[trasparent] via-black/80 to-[#141414]/80 space-x-5 scrollbar-hide">
        {listType &&
          listType.map((e, i) => {
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
                    sizes="100%"
                    layout="fill"
                    objectFit="fill"
                    className="rounded-lg"
                  />
                  {type === 'toprated' && (
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
