import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type MyPostersProps = {};

function MainPosters() {
  var initialWidth = 0;
  if (typeof window !== 'undefined') {
    initialWidth = window.innerWidth;
  }
  const [innerWidth, setInnerWidth] = useState(initialWidth);
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, [innerWidth]);
  const moveWidth = [
    [
      'translate-x-[0px]',
      'translate-x-[-220px]',
      'translate-x-[-440px]',
      'translate-x-[-660px]',
      'translate-x-[-880px]',
      'translate-x-[-1100px]',
      'translate-x-[-1320px]',
      'translate-x-[-1540px]',
      'translate-x-[-1760px]',
      'translate-x-[-1980px]',
    ],
    [
      'translate-x-[0px]',
      'translate-x-[-290px]',
      'translate-x-[-580px]',
      'translate-x-[-870px]',
      'translate-x-[-1160px]',
      'translate-x-[-1450px]',
      'translate-x-[-1740px]',
      'translate-x-[-2030px]',
      'translate-x-[-2320px]',
      'translate-x-[-2610px]',
    ],
    [
      'translate-x-[0px]',
      'translate-x-[-320px]',
      'translate-x-[-640px]',
      'translate-x-[-960px]',
      'translate-x-[-1280px]',
      'translate-x-[-1600px]',
      'translate-x-[-1920px]',
      'translate-x-[-2240px]',
      'translate-x-[-2560px]',
      'translate-x-[-2880px]',
    ],
  ];
  const images = [
    {
      src: '/asset/image/image 2.png',
    },
    {
      src: '/asset/image/image 2.png',
    },
    {
      src: '/asset/image/image 2.png',
    },
    {
      src: '/asset/image/image 12.png',
    },
    {
      src: '/asset/image/image 12.png',
    },
    {
      src: '/asset/image/image 12.png',
    },
    {
      src: '/asset/image/image 15.png',
    },
    {
      src: '/asset/image/image 15.png',
    },
    {
      src: '/asset/image/image 15.png',
    },
    {
      src: '/asset/image/image 15.png',
    },
  ];
  const [move, setMove] = useState(0);
  const moveRight = () => {
    if (move < moveWidth[0].length - 1) {
      setMove(move + 1);
      console.log('moveRight');
    } else if (move === moveWidth[0].length - 1) {
      setMove(0);
    }
  };
  const moveLeft = () => {
    if (move != 0) {
      setMove(move - 1);
      console.log('moveLeft');
    }
  };

  return (
    <div className="border overflow-hidden group">
      <div
        className={`${
          innerWidth >= 1024
            ? moveWidth[2][move]
            : innerWidth >= 768
            ? moveWidth[1][move]
            : moveWidth[0][move]
        } w-full h-[400px] md:h-[600px] flex items-center duration-700 space-x-5 lg:ml-[41%] md:ml-[32%] ml-[33%]`}
      >
        <>
          {images.map((e, i) => {
            return (
              <div key={i}>
                {i === move ? (
                  <div className="relative flex w-[220px] h-[313px] md:w-[300px] md:h-[426px] lg:w-[350px] lg:h-[497px] duration-700 shrink-0">
                    <Image
                      src={e.src}
                      sizes="100%"
                      alt="이미지"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative flex w-[200px] h-[284px] md:w-[270px] md:h-[384px] lg:w-[300px] lg:h-[426px] duration-700 shrink-0">
                    <Image
                      src={e.src}
                      sizes="100%"
                      alt="이미지"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                )}
              </div>
            );
          })}
        </>
      </div>
      <div className="top-[15%] md:top-[20%] absolute invisible group-hover:visible flex justify-between items-center w-full">
        <div
          className="w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer"
          onClick={moveLeft}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </div>
        <div
          className="w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer"
          onClick={moveRight}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default MainPosters;
