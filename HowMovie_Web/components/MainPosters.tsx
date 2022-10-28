import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { detailListType, listType } from './MovieList';
import Link from 'next/link';

interface PropsType {
  listType: listType;
}

function MainPosters({ listType }: PropsType) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  var initialWidth = 0;
  if (typeof window !== 'undefined') {
    initialWidth = window.innerWidth;
  }
  const moveWidths = [-220, -290, -320];
  const [move, setMove] = useState(0);
  const [currPoster, setCurrPoster] = useState(5);
  const [innerWidth, setInnerWidth] = useState(initialWidth);
  const [transition, setTransition] = useState('');
  const setSlides = () => {
    const addedFront = [];
    const addedLast = [];
    var index = 0;
    while (index < 5) {
      addedFront.push(listType[index % listType.length]);
      addedLast.push(listType[listType.length - 5 + (index % listType.length)]);
      index++;
    }
    return [...addedLast, ...listType, ...addedFront];
  };
  const carousel = listType && setSlides();
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, [innerWidth]);

  const replaceCarousel = (a: number, b: number) => {
    setTimeout(() => {
      setTransition('transform 0ms ease-in');
      setMove(a);
      setCurrPoster(b);
    }, 600);
    setTimeout(() => {
      setTransition('');
    }, 700);
  };
  const moveRight = () => {
    if (currPoster < listType.length + 5) {
      setMove(move + 1);
      setCurrPoster(currPoster + 1);
    } else {
      setMove(move + 1);
      setCurrPoster(currPoster + 1);
      replaceCarousel(1, 6);
    }
  };
  const moveLeft = () => {
    if (currPoster > 4) {
      setMove(move - 1);
      setCurrPoster(currPoster - 1);
    } else {
      setMove(move - 1);
      setCurrPoster(currPoster - 1);
      replaceCarousel(18, 23);
    }
  };

  return (
    <div className="overflow-hidden group z-40">
      <div
        className={`w-full h-[450px] md:h-[700px] flex duration-700 items-center space-x-5 ml-[50%] lg:mt-[-50px] lg:mb-[-50px] md:mt-[-100px] md:mb-[-100px] `}
        style={{
          ...(listType && { transition: `${transition}` }),
          transform: `translateX(${
            innerWidth >= 1024
              ? moveWidths[2] * move
              : innerWidth >= 768
              ? moveWidths[1] * move
              : moveWidths[0] * move
          }px)`,
        }}
      >
        {carousel
          ? carousel.map((e, i) => {
              return (
                <div key={i}>
                  {i === currPoster ? (
                    <Link href={`/detail?movie_id=${e.id}`}>
                      <div
                        className={`relative flex w-[220px] h-[313px] md:w-[300px] md:h-[426px] lg:w-[350px] lg:h-[497px] duration-700 shrink-0 left-[-550%] md:left-[-535%] lg:left-[-508%] rounded-lg overflow-hidden hover:cursor-pointer drop-shadow-br-md`}
                        style={{ transition: `${transition}` }}
                      >
                        <Image
                          src={baseUrl + e.poster_path}
                          sizes="100%"
                          alt="이미지"
                          layout="fill"
                          objectFit="fill"
                          className="rounded-xl"
                          placeholder="blur"
                          blurDataURL={baseUrl + e.poster_path}
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link href={`/detail?movie_id=${e.id}`}>
                      <div
                        className="relative flex w-[200px] h-[284px] md:w-[270px] md:h-[384px] lg:w-[300px] lg:h-[426px] duration-700 shrink-0 left-[-605%] md:left-[-594.5%] lg:left-[-593%] rounded-lg overflow-hidden hover:cursor-pointer drop-shadow-br-md"
                        style={{ transition: `${transition}` }}
                      >
                        <Image
                          src={baseUrl + e.poster_path}
                          sizes="100"
                          alt="이미지"
                          layout="fill"
                          objectFit="fill"
                          className="rounded-xl "
                          placeholder="blur"
                          blurDataURL={baseUrl + e.poster_path}
                        />
                      </div>
                    </Link>
                  )}
                </div>
              );
            })
          : null}
      </div>
      <div
        className="top-[15%] left-0 lg:top-[20%] md:top-[17%] absolute invisible group-hover:visible w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer"
        onClick={moveLeft}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </div>
      <div
        className="top-[15%] right-0 lg:top-[20%] md:top-[17%] absolute invisible group-hover:visible w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer "
        onClick={moveRight}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </div>
    </div>
  );
}

export default MainPosters;
