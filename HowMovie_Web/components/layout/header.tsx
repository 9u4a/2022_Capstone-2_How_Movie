import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import testAPI from '../../pages/api/testAPI.json';

const Header = () => {
  const headerType = [
    { id: 0, title: '홈', type: 'home' },
    { id: 1, title: '장르별', type: 'genre' },
  ];

  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState('');
  const inputFocus = useRef<HTMLInputElement>(null);
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const onClick = () => {
    setIsToggle(!isToggle);
    setIsSearch('');
    if (inputFocus.current !== null && inputFocus.current !== undefined) {
      inputFocus.current.focus();
    }
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
            onChange={(e) => {
              setIsSearch(e.target.value);
              console.log(e.target.value);
            }}
            // id="search"
            ref={inputFocus}
          ></input>
          <div
            className={`absolute top-[40px] right-[125px] ${
              isToggle && `w-[200px] md:w-[250px] lg:w-[300px]`
            } rounded-lg bg-white z-10 divide-y ${
              isSearch && `border border-slate-400`
            } duration-500 z-[60] max-h-[500px] overflow-y-scroll scrollbar-hide`}
          >
            {isSearch &&
              testAPI.result[2].nowplaying
                ?.filter((e) => e.title.includes(isSearch))
                .map((e, i) => {
                  return (
                    <div
                      className="flex text-black p-1 cursor-pointer hover:font-semibold hover:bg-slate-100"
                      key={i}
                    >
                      <div className="w-[40px] h-[60px] relative">
                        <Image
                          src={baseUrl + e.poster_path}
                          alt="이미지"
                          sizes="100%"
                          layout="fill"
                          objectFit="fill"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="mt-[5px] ml-[10px] ">
                        <div className="text-[15px]">{e.title}</div>
                        <div className="text-[13px] text-slate-400">2017</div>
                      </div>
                    </div>
                  );
                })}
          </div>

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
