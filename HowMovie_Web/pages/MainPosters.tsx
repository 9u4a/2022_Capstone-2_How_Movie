import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type MyPostersProps = {};
// type StyleType = {
//   style: string;
//   setStyle: string;
// }

function MainPosters() {
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
  const IMG_WIDTH = 300;
  const [move, setMove] = useState(0);
  const [style, setStyle] = useState(`translate-x-${move}`);
  const moveRight = () => {
    if (move >= -(images.length * IMG_WIDTH) + IMG_WIDTH * 3) {
      setMove(move - IMG_WIDTH);
    }
  };
  const moveLeft = () => {
    if (move >= -IMG_WIDTH) {
      setMove(move + IMG_WIDTH);
    }
  };

  // const imgSize = useRef(images.current.length);
  return (
    <>
      <div className="relative w-full group h-[400px] md:h-[600px] border flex justify-center items-center duration-700 space-x-5 overflow-hidden">
        {images.map((e) => {
          return (
            <>
              <div className="relative w-[200px] h-[284px] md:w-[270px] md:h-[384px] lg:w-[300px] lg:h-[426px] duration-700 shrink-0">
                <Image
                  src={e.src}
                  sizes="100%"
                  width={100}
                  height={100}
                  alt="이미지"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </>
          );
        })}
        <div className="absolute invisible group-hover:visible flex justify-between items-center w-full left-[-20px]">
          <div className="w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer">
            <ChevronLeftIcon className="w-8 h-8" onClick={moveLeft} />
          </div>
          <div className="w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer ">
            <ChevronRightIcon className="w-8 h-8" onClick={moveRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPosters;
