import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface isSearchType {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
}

function Header() {
  const genre = [
    {
      id: 28,
      name: '액션',
    },
    {
      id: 12,
      name: '모험',
    },
    {
      id: 16,
      name: '애니메이션',
    },
    {
      id: 35,
      name: '코미디',
    },
    {
      id: 80,
      name: '범죄',
    },
    {
      id: 99,
      name: '다큐멘터리',
    },
    {
      id: 18,
      name: '드라마',
    },
    {
      id: 10751,
      name: '가족',
    },
    {
      id: 14,
      name: '판타지',
    },
    {
      id: 36,
      name: '역사',
    },
    {
      id: 27,
      name: '공포',
    },
    {
      id: 10402,
      name: '음악',
    },
    {
      id: 9648,
      name: '미스터리',
    },
    {
      id: 10749,
      name: '로맨스',
    },
    {
      id: 878,
      name: 'SF',
    },
    {
      id: 10770,
      name: 'TV 영화',
    },
    {
      id: 53,
      name: '스릴러',
    },
    {
      id: 10752,
      name: '전쟁',
    },
    {
      id: 37,
      name: '서부',
    },
  ];
  const session = useSession();
  const baseUrl = 'https://image.tmdb.org/t/p/w92';
  const searchRef = useRef<any>(null);
  const inputFocus = useRef<any>(null);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<isSearchType | any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [searchInput, setSearchInput] = useState<any>(null);
  const [isGenreToggle, setGenreToggle] = useState(false);
  const [currGenre, setCurrGenre] = useState<number>();

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
  }, [searchInput, currGenre]);

  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;
  return (
    <div className="fixed w-full top-0 z-[999]">
      <div
        className={`flex w-full h-[50px] bg-black justify-between items-center ${
          session ? 'pl-[50px] pr-[20px]' : 'px-[50px]'
        }`}
      >
        <div className="flex">
          <Link href="/">
            <a className="flex items-center mr-[30px]">
              <Image
                src="/asset/image/clapperboard.png"
                alt="icon"
                width={25}
                height={25}
              />
              <h4 className="ml-[5px] font-semibold">무비어때</h4>
            </a>
          </Link>
          <div
            className="flex items-center h-[50px]"
            onMouseEnter={() => setGenreToggle(true)}
            onMouseLeave={() => setGenreToggle(false)}
          >
            <div className="hover:cursor-pointer">장르</div>
          </div>
        </div>

        <div className="flex items-center w-[100px] h-[50px] shrink-0">
          {/* Search Box */}
          <MagnifyingGlassIcon
            className={`w-[20px] h-[20px]  hover:cursor-pointer z-10 ${
              isToggle ? 'text-black' : 'text-white'
            } ${session ? 'mr-[35px]' : 'mr-[20px]'} duration-1000`}
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
              setSearchInput(e.target.value.replace(/^[\s\uFEFF\xA0]+/gi, ''));
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
                          className={`w-[40px] h-[60px] mr-[10px] relative rounded-lg overflow-hidden ${
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
                          <div className="text-[13px] text-slate-400">
                            {e.release_date.slice(0, 4)}
                          </div>
                        </div>
                      </a>
                    </Link>
                  );
                })}
          </div>

          {/* Login || User Profile */}
          {session.data?.user ? (
            <div
              className="flex"
              onMouseEnter={() => setIsProfileToggle(true)}
              onMouseLeave={() => setIsProfileToggle(false)}
            >
              <Image
                src={session.data.user.image!}
                width={35}
                height={35}
                alt="userProfileImg"
                className="rounded-full hover:cursor-pointer"
              />
              <div
                className={`${
                  isProfileToggle
                    ? 'opacity-1'
                    : 'opacity-0 pointer-events-none'
                } rounded-lg flex-col text-black bg-white absolute top-[43px] right-[20px] divide-y-2 z-10 duration-300`}
              >
                <div className="px-[15px] py-[5px]">
                  <div className="flex justify-start items-center ">
                    {session.data.user.name}님
                  </div>
                  <div className="font-light text-[12px] text-slate-500">
                    {session.data.user.email}
                  </div>
                </div>
                <Link href="/myComment">
                  <a
                    className="flex justify-center items-center h-[30px] hover:cursor-pointe"
                    onClick={() => {
                      setIsProfileToggle(!isProfileToggle);
                    }}
                  >
                    내 댓글
                  </a>
                </Link>
                <div
                  className="flex justify-center items-center  h-[30px] hover:cursor-pointer"
                  onClick={() => signOut({ callbackUrl: '/' })}
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

      {/* Genre list Box */}
      {isGenreToggle ? (
        <div
          className={`flex flex-wrap absolute top-10 w-full ${
            isGenreToggle ? null : 'hidden'
          } bg-black  drop-shadow-bt-md duration-700`}
          onMouseEnter={() => setGenreToggle(true)}
          onMouseLeave={() => setGenreToggle(false)}
        >
          {genre.map((e, i) => {
            return (
              <div
                key={i}
                className="lg:w-[20%] md:w-[20%] w-[50%] flex justify-center py-1"
              >
                <Link href={`/genre?genre_id=${e.id}`}>
                  <a
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setCurrGenre(e.id), setGenreToggle(!isGenreToggle);
                    }}
                  >
                    {e.name}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Header;
