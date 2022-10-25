import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Genre() {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
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
  // console.log(genre[0].id);
  const [genreMovies, setGenreMovies] = useState<any>();
  useEffect(() => {
    if (router.query.genre_id !== undefined) {
      const fetchGenreMovie = async () => {
        try {
          setLoading(true);
          const res = await axios.get(
            `http://localhost:8000/genre?genre=${router.query.genre_id}`
          );
          setGenreMovies(res.data.result[0].genres);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
        setLoading(false);
      };
      fetchGenreMovie();
    }
  }, [router.query.genre_id]);
  console.log(genreMovies);

  return (
    <>
      <div className="space-y-5 p-5">
        {!loading ? (
          genreMovies &&
          genreMovies.map((e: any, i: number) => {
            return (
              <Link href={`/detail?movie_id=${e.id}`} key={i}>
                <div className="w-full flex space-x-5 bg-slate-900 drop-shadow-br-md  hover:cursor-pointer">
                  <div className="relative md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700 rounded-lg shrink-0">
                    <Image
                      src={baseUrl + e.poster_path}
                      alt="이미지"
                      sizes="100%"
                      layout="fill"
                      objectFit="fill"
                      placeholder="blur"
                      blurDataURL={baseUrl + e.poster_path}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <div className="flex items-baseline space-x-1 leading-6 mb-3 s">
                      <h3>{e.title}</h3>
                      <h4 className="italic">{e.original_title}</h4>
                    </div>
                    <div className="flex space-x-3 mb-3 items-center">
                      <div>{e.release_date}</div>
                      <div className="flex space-x-2">
                        {e.genre_ids.map((e: number, i: number) => {
                          return genre.map((v: any) => {
                            if (e === v.id) {
                              return <div key={i}>{v.name}</div>;
                            }
                          });
                        })}
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[20px] h-[20px] text-[#d70000]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            // transform="translate(-2 -2)"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>{e.vote_average}</div>
                      </div>
                    </div>
                    <div className="overflow-hidden text-[12px] opacity-70 mr-5">
                      {e.overview}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <>
            <div className="w-full flex space-x-5 bg-slate-900 drop-shadow-br-md">
              <div className="relative md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700">
                <div className="w-full h-full rounded-lg bg-slate-700 animate-pulse"></div>
              </div>
              <div className="flex flex-col mt-5">
                <div className="bg-slate-700 w-[250px] h-[40px] rounded-lg animate-pulse mb-5"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="w-full flex space-x-5 bg-slate-900 drop-shadow-br-md">
              <div className="relative md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700">
                <div className="w-full h-full rounded-lg bg-slate-700 animate-pulse"></div>
              </div>
              <div className="flex flex-col mt-5">
                <div className="bg-slate-700 w-[250px] h-[40px] rounded-lg animate-pulse mb-5"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="w-full flex space-x-5 bg-slate-900 drop-shadow-br-md">
              <div className="relative md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700">
                <div className="w-full h-full rounded-lg bg-slate-700 animate-pulse"></div>
              </div>
              <div className="flex flex-col mt-5">
                <div className="bg-slate-700 w-[250px] h-[40px] rounded-lg animate-pulse mb-5"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="w-full flex space-x-5 bg-slate-900 drop-shadow-br-md">
              <div className="relative md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700">
                <div className="w-full h-full rounded-lg bg-slate-700 animate-pulse"></div>
              </div>
              <div className="flex flex-col mt-5">
                <div className="bg-slate-700 w-[250px] h-[40px] rounded-lg animate-pulse mb-5"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse mb-3"></div>
                <div className="bg-slate-700 w-[400px] h-[30px] rounded-lg animate-pulse"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Genre;
