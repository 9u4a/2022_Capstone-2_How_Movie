import Image from 'next/image';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type MyPostersProps = {};

function MainPosters() {
  return (
    <>
      <div className="relative w-full group h-[400px] md:h-[600px] border flex justify-center items-center duration-700 space-x-5">
        <div className="relative w-[200px] h-[284px] md:w-[270px] md:h-[384px] duration-700 top-[-20px]">
          <Image
            src="/asset/image/image 2.png"
            sizes="100%"
            width={100}
            height={100}
            alt="이미지"
            layout="fill"
            objectFit="contain"
            className="border relative"
          />
        </div>
        <div className="relative w-[200px] h-[284px] md:w-[270px] md:h-[384px] duration-700">
          <Image
            src="/asset/image/image 12.png"
            sizes="100%"
            width={100}
            height={100}
            alt="이미지"
            layout="fill"
            objectFit="contain"
            className="border relative"
          />
        </div>
        <div className="relative w-[200px] h-[284px] md:w-[270px] md:h-[384px] duration-700 top-[-20px]">
          <Image
            src="/asset/image/image 15.png"
            sizes="100%"
            width={100}
            height={100}
            alt="이미지"
            layout="fill"
            objectFit="contain"
            className="border relative"
          />
        </div>
        <div className="absolute invisible group-hover:visible flex justify-between items-center w-full">
          <div className="w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer">
            <ChevronLeftIcon className="w-8 h-8" />
          </div>
          <div className="w-[50px] h-[100px] flex justify-center items-center bg-slate-50/50 hover:cursor-pointer">
            <ChevronRightIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPosters;
