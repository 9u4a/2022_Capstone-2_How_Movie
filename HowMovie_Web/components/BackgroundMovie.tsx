import axios from 'axios';
import Image from 'next/image';
import { type } from 'os';
import React, { useEffect, useState } from 'react';

interface Props {
  detailInfo: any;
  type: string;
}

const BackgroundMovie = ({ detailInfo, type }: Props) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  return detailInfo ? (
    <>
      {/* movieDetail */}
      {type === 'movieDetail' ? (
        detailInfo.video.length !== 0 ? (
          <div className="relative w-full max-w-[1000px] pb-[350px] bg-black rounded-xl">
            <iframe
              className="w-full h-full max-h-[350px] absolute rounded-xl"
              src={`https://www.youtube.com/embed/${detailInfo.video}?fs=0&modestbranding=1&disablekb=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ) : detailInfo.backdrop_path !== '' ? (
          <div className="relative w-full max-w-[1000px] pb-[350px] bg-black rounded-t-xl">
            <Image
              src={baseUrl + detailInfo.backdrop_path}
              layout="fill"
              alt="backDrop"
              className="rounded-xl"
              placeholder="blur"
              objectFit="cover"
              blurDataURL={baseUrl + detailInfo.backdrop_path}
            />
          </div>
        ) : null
      ) : // searchDetail
      detailInfo.video.length > 1 ? (
        <div className="w-full flex overflow-x-scroll snap-x space-x-5 snap-mandatory">
          <div className="w-full max-w-[325px] h-full shrink-0"></div>
          {detailInfo.video.map((e: any, i: number) => {
            return (
              <div
                className="relative w-full max-w-[650px] pb-[350px] bg-black rounded-xl shrink-0 snap-center"
                key={i}
              >
                <iframe
                  className="w-full h-full max-h-[350px] absolute rounded-xl"
                  src={`https://www.youtube.com/embed/${detailInfo.video[0].video}?fs=0&modestbranding=1&disablekb=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            );
          })}
          <div className="w-full max-w-[325px] h-full shrink-0"></div>
        </div>
      ) : detailInfo.video.length === 1 ? (
        <div className="relative w-full max-w-[650px] pb-[350px] bg-black rounded-xl">
          <iframe
            className="w-full h-full max-h-[350px] absolute rounded-xl"
            src={`https://www.youtube.com/embed/${detailInfo.video[0].video}?fs=0&modestbranding=1&disablekb=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : detailInfo.backdrop_path !== '' ? (
        <div className="relative w-full max-w-[650px] pb-[350px] bg-black rounded-t-xl">
          <Image
            src={baseUrl + detailInfo.backdrop_path}
            layout="fill"
            alt="backDrop"
            className="rounded-xl"
            placeholder="blur"
            objectFit="cover"
            blurDataURL={baseUrl + detailInfo.backdrop_path}
          />
        </div>
      ) : null}
    </>
  ) : (
    <>
      <div className="text-white relative w-full max-w-[1000px] h-[350px] bg-black rounded-t-xl">
        <div className="w-full h-full max-h-[350px] absolute rounded-xl flex justify-center items-center">
          <svg
            className="animate-spin"
            width="100"
            height="100"
            viewBox="0 0  24 24"
            color="#434343"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-7"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BackgroundMovie;
