import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Login from '../../pages/Login';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const headerType = [
    { id: 0, title: '홈', type: 'home' },
    { id: 1, title: '장르별', type: 'genre' },
  ];
  const testSearch = ['공조', '공조2', '탑건', '탑건 메버릭'];

  const [isToggle, setIsToggle] = useState(false);
  const onClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <div className="flex w-full h-[50px] bg-black justify-between items-center px-[50px]">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/asset/image/clapperboard.png"
              alt="icon"
              width={25}
              height={25}
            />
            <h4 className="ml-[5px] font-semibold">무비어때</h4>
          </a>
        </Link>
        <div className="flex items-center">
          <MagnifyingGlassIcon
            className={`w-[20px] h-[20px] mr-[20px] hover:cursor-pointer z-10 ${
              isToggle ? 'text-black' : 'text-white'
            } duration-1000`}
            onClick={() => onClick()}
          />
          <input
            className={`absolute ${
              isToggle ? 'w-[200px] md:w-[250px] lg:w-[300px] px-[10px]' : 'w-0'
            } h-[30px]  text-black right-[125px] rounded-lg bg-slate-300 duration-500`}
            placeholder="영화를 검색하세요..."
            id="search"
          ></input>
          {isToggle && (
            <div className="absolute top-[40px] right-[125px] w-[200px] md:w-[250px] lg:w-[300px] rounded-lg bg-white z-10 divide-y border border-slate-400 duration-500">
              <div className="text-black p-1 cursor-pointer hover:font-semibold">
                공조
              </div>
              <div className="text-black p-1 cursor-pointer hover:font-semibold">
                공조
              </div>
              <div className="text-black p-1 cursor-pointer hover:font-semibold">
                공조
              </div>
            </div>
          )}

          <Link href="/Login">
            <a className="flex justify-center items-center rounded-md w-[60px] h-[30px] bg-slate-800 cursor-pointer hover:bg-slate-600 active:bg-slate-900">
              로그인
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
