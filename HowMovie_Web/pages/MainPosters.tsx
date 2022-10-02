import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type MyPostersProps = {};
type moveWidthType = {
  [key: number]: string;
};

function MainPosters() {
  const IMG_WIDTH = 320;
  const moveWidth = [
    [
      'translate-x-[0px]',
      'translate-x-[-220px]',
      'translate-x-[-440px]',
      'translate-x-[-660px]',
      'translate-x-[-880px]',
      'translate-x-[-1100px]',
    ],
    [
      'translate-x-[0px]',
      'translate-x-[-290px]',
      'translate-x-[-580px]',
      'translate-x-[-870px]',
      'translate-x-[-1160px]',
      'translate-x-[-1450px]',
    ],
    [
      'translate-x-[0px]',
      'translate-x-[-320px]',
      'translate-x-[-640px]',
      'translate-x-[-960px]',
      'translate-x-[-1280px]',
      'translate-x-[-1640px]',
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
    setMove(move + 1);
    console.log('moveRight');
  };
  const moveLeft = () => {
    if (move != 0) {
      setMove(move - 1);
      console.log('moveLeft');
    }
  };
  // const moveRight = () => {
  //   if (move >= -(images.length * IMG_WIDTH) + IMG_WIDTH * 3) {
  //     setMove(move - IMG_WIDTH);
  //     console.log('moveRight');
  //   }
  // };
  // const moveLeft = () => {
  //   if (move <= -IMG_WIDTH) {
  //     setMove(move + IMG_WIDTH);
  //     console.log('moveLeft');
  //   }
  // };
  // const moveWidth: moveWidthType = { 0: `translate-x-[${move}px]` };
  console.log(moveWidth);

  return (
    <div className="border overflow-hidden group">
      <div
        className={`${moveWidth[0][move]} md:${moveWidth[1][move]} lg:${moveWidth[2][move]} w-full h-[400px] md:h-[600px] border flex items-center duration-700 space-x-5`}
      >
        <>
          {images.map((e, i) => {
            return (
              <div key={i}>
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
