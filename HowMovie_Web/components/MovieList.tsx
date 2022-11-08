import Image from 'next/image';
import React, { useState } from 'react';
import MovieDetail from './MovieDetail';

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
  type: string;
  listType: listType;
}

function MovieList({ type, listType }: MovieDetailProps) {
  const [detailOpen, setDetailOpen] = useState<boolean>(false);
  const [currID, setCurrID] = useState<number>(0);
  const baseUrl = 'https://image.tmdb.org/t/p/w342';

  const showDetail = () => {
    setDetailOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="h-screen max-h-[350px]">
      {detailOpen && (
        <MovieDetail setDetailOpen={setDetailOpen} currID={currID} />
      )}
      <div className="relative z-20">
        {type === 'toprated' ? (
          <h1 className="px-[30px] font-semibold text-shadow-2xl">Top 10</h1>
        ) : type === 'recommendations' ? null : (
          <h2 className="px-[30px] font-semibold text-shadow-2xl">최신 영화</h2>
        )}
        <div className="mb-[30px] px-[30px] flex w-full snap-x snap-mandatory overflow-x-scroll z-20 bg-gradient-to-b from-[trasparent] via-black/80 to-[#141414]/80 space-x-5 pb-[20px] drop-shadow-br-md">
          {listType &&
            listType.map((e, i) => {
              return (
                <div key={i} className="">
                  <div
                    className="relative shrink-0 md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700 cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => {
                      showDetail();
                      setCurrID(e.id);
                    }}
                  >
                    {e.poster_path ? (
                      <Image
                        src={baseUrl + e.poster_path}
                        alt="이미지"
                        sizes="100%"
                        layout="fill"
                        objectFit="fill"
                        placeholder="blur"
                        blurDataURL={baseUrl + e.poster_path}
                        priority
                      />
                    ) : (
                      <Image
                        src="/asset/image/noImg.svg"
                        alt="posterImg"
                        sizes="100%"
                        layout="fill"
                        objectFit="fill"
                        className="rounded-lg bg-white/10"
                        placeholder="blur"
                        blurDataURL="/asset/image/noImg.svg"
                        priority
                      />
                    )}

                    {type === 'toprated' && (
                      <h1 className="relative z-30 ml-[10px] top-[-5px] italic font-semibold text-shadow-2xl">
                        {i + 1}
                      </h1>
                    )}
                  </div>
                  {type === 'recommendations' && (
                    <div className="w-[140px] mt-2 truncate">{e.title}</div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
