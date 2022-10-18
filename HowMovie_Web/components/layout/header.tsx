import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface isSearchType {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

function Header() {
  const session = useSession();
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const searchRef = useRef<any>(null);
  const inputFocus = useRef<any>(null);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isProfileToggle, setProfileIsToggle] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<isSearchType | any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [searchInput, setSearchInput] = useState<any>(null);

  const onClick = () => {
    setIsToggle(!isToggle);
    setSearchInput('');
    if (inputFocus.current !== null && inputFocus.current !== undefined) {
      inputFocus.current.focus();
    }
  };

  useEffect(() => {
    if (searchInput !== null && searchInput !== '') {
      const fetchSearchInfo = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8000/search?query=${searchInput}`
          );
          setIsSearch(res);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
      };
      fetchSearchInfo();
    } else {
      setSearchInput(null);
    }

    return () => {};
  }, [searchInput]);
  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;
  return (
    <>
      <div
        className={`flex w-full h-[50px] bg-black justify-between items-center ${
          session ? 'pl-[50px] pr-[20px]' : 'px-[50px]'
        }`}
      >
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
            } h-[30px]  text-black ${
              session ? 'right-[90px]' : 'right-[125px]'
            } rounded-lg bg-slate-300 duration-500`}
            placeholder="영화를 검색하세요..."
            onChange={(e) => {
              setSearchInput(e.target.value.trim());
            }}
            value={searchInput || ''}
            ref={inputFocus}
          ></input>
          <div
            className={`absolute top-[40px] ${
              session ? 'right-[90px]' : 'right-[125px]'
            } ${
              isToggle
                ? `w-[200px] md:w-[250px] lg:w-[300px]`
                : 'hidden pointer-events-none'
            } rounded-lg bg-white divide-y duration-500 z-[60] max-h-[500px] overflow-y-scroll scrollbar-hide`}
            onClick={() => setIsToggle(!isToggle)}
          >
            {isSearch &&
              isSearch.data.result.search
                .filter((e: isSearchType) => e.title.includes(searchInput))
                .map((e: isSearchType, i: any) => {
                  return (
                    <Link href={`/detail?movie_id=${e.id}`} key={i}>
                      <a className="flex items-center text-black px-2 py-1 cursor-pointer hover:font-semibold hover:bg-slate-100">
                        <div
                          className={`w-[40px] h-[60px] mr-[10px] relative rounded-lg ${
                            e.poster_path || 'border border-slate-200'
                          }`}
                        >
                          {e.poster_path === null ? (
                            <Image
                              src="/asset/image/noImg.svg"
                              alt="posterImg"
                              sizes="100%"
                              layout="fill"
                              objectFit="fill"
                              className="rounded-lg"
                              placeholder="blur"
                              blurDataURL="/asset/image/noImg.svg"
                              priority
                            />
                          ) : (
                            <Image
                              src={baseUrl + e.poster_path}
                              alt="posterImg"
                              sizes="100%"
                              layout="fill"
                              objectFit="fill"
                              className="rounded-lg"
                              placeholder="blur"
                              blurDataURL={baseUrl + e.poster_path}
                              priority
                            />
                          )}
                        </div>
                        <div className="w-[130px] md:w-[180px] lg:w-[230px] mt-[5px]flex flex-col justify-between">
                          <div className="text-[15px] leading-4">{e.title}</div>
                          <div className="text-[13px] text-slate-400">2017</div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
          </div>
          {session.data?.user ? (
            <div className="flex">
              <Image
                src={session.data.user.image!}
                width={35}
                height={35}
                alt="userProfileImg"
                className="rounded-full hover:cursor-pointer"
                onClick={() => setProfileIsToggle(!isProfileToggle)}
              />
              {isProfileToggle ? (
                <div className="border rounded-lg text-black bg-white absolute top-[50px] right-[20px] divide-y-2 z-10 duration-700">
                  <div className="flex justify-center items-center w-[100px] h-[30px]">
                    찜 목록
                  </div>
                  <div className="flex justify-center items-center w-[100px] h-[30px]">
                    내 댓글
                  </div>
                  <div className="flex justify-center items-center w-[100px] h-[30px]">
                    로그아웃
                  </div>
                </div>
              ) : null}
              <div
                className={` ${
                  isProfileToggle
                    ? 'opacity-1'
                    : 'opacity-0 pointer-events-none'
                } rounded-lg flex-col text-black bg-white absolute top-[50px] right-[20px] divide-y-2 z-10 duration-300`}
              >
                <div className="flex justify-center items-center w-[100px] h-[30px] hover:cursor-pointer">
                  찜 목록
                </div>
                <div className="flex justify-center items-center w-[100px] h-[30px] hover:cursor-pointer">
                  내 댓글
                </div>
                <div
                  className="flex justify-center items-center w-[100px] h-[30px] hover:cursor-pointer"
                  onClick={() => signOut()}
                >
                  로그아웃
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <a className="flex justify-center items-center rounded-md w-[60px] h-[30px] bg-slate-800 cursor-pointer hover:bg-slate-600 active:bg-slate-900">
                로그인
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
