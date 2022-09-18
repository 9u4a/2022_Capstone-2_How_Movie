import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const headerType = [
    { id: 0, title: '홈', type: 'home' },
    { id: 1, title: '최신', type: 'latest' },
    { id: 2, title: '인기', type: 'popular' },
  ];
  return (
    <>
      <div className="flex w-full h-[50px] bg-black justify-between items-center px-[50px]">
        <div className="flex items-center">
          <Image
            src="/asset/image/clapperboard.png"
            alt="icon"
            width={25}
            height={25}
          />
          <h4 className="ml-[5px] mr-[70px] font-semibold">무비어때</h4>
          <div className="flex space-x-[20px] text-gray-500 ">
            <div className="text-white">홈</div>
            <div>최신</div>
            <div>인기</div>
          </div>
        </div>
        <div className="flex items-center">
          <MagnifyingGlassIcon className="w-[20px] h-[20px] mr-[20px]" />
          <div>로그인</div>
        </div>
      </div>
    </>
  );
};

export default Header;
