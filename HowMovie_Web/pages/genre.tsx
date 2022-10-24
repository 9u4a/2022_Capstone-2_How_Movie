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
  // const [genreId, setGenreId] = useState<string | string[]>();
  const [genreMovies, setGenreMovies] = useState<any>();
  useEffect(() => {
    if (router.query.genre_id !== undefined) {
      // console.log(router.query.genre_id);
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

  return (
    <>
      <div className="space-y-5 p-5">
        {!loading ? (
          genreMovies &&
          genreMovies.map((e: any, i: number) => {
            return (
              <Link href={`/detail?movie_id=${e.id}`} key={i}>
                <div className="w-full flex space-x-5 bg-slate-900 drop-shadow-br-md  hover:cursor-pointer">
                  <div className="relative md:w-[152px] md:h-[216px] w-[140px] h-[199px] duration-700 rounded-lg">
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
                    <h3 className="">{e.title}</h3>
                    <div>{e.release_date}</div>
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
