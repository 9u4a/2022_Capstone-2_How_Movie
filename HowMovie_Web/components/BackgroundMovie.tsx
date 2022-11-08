import Image from 'next/image';
import React from 'react';
import LoadingSpinner from './common/LoadingSpinner';

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
        ) : detailInfo.backdrop_path !== null ? (
          <div className="relative w-full max-w-[1000px] pb-[350px] bg-black rounded-xl">
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
        ) : (
          <div className="relative w-full max-w-[1000px] pb-[350px] bg-white/5 rounded-xl">
            <Image
              src="/asset/image/noImg.svg"
              layout="fill"
              alt="backDrop"
              className="rounded-xl"
              placeholder="blur"
              objectFit="contain"
              blurDataURL="/asset/image/noImg.svg"
            />
          </div>
        )
      ) : // searchDetail
      detailInfo.video.length > 1 ? (
        <div className="w-full flex overflow-x-scroll snap-x space-x-5 snap-mandatory">
          <div className="w-full max-w-[650px] h-full shrink-0"></div>
          {detailInfo.video.map((e: any, i: number) => {
            return (
              <div
                className="relative w-full max-w-[650px] pb-[350px] bg-black rounded-xl shrink-0 snap-center"
                key={i}
              >
                <iframe
                  className="w-full h-full max-h-[350px] absolute rounded-xl"
                  src={`https://www.youtube.com/embed/${e.video}?fs=0&modestbranding=1&disablekb=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            );
          })}
          <div className="w-full max-w-[650px] h-full shrink-0"></div>
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
      ) : detailInfo.backdrop_path !== null ? (
        <div className="relative w-full max-w-[650px] pb-[350px] bg-white/10 rounded-xl">
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
        <LoadingSpinner />
      </div>
    </>
  );
};

export default BackgroundMovie;
