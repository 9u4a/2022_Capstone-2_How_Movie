import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BackgroundMovie from '../components/BackgroundMovie';
import Comment from '../components/Comment';

function Detail() {
  const [searchDetail, setSearchDetail] = useState<any>();
  const [searchCredit, setSearchCredit] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [movieId, setMovieId] = useState<any>();
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  // const profileBaseUrl = 'https://www.themoviedb.org/t/p/w276_and_h350_face';

  // console.log(searchDetail && searchDetail[1]);
  const router = useRouter();
  useEffect(() => {
    if (router.query.movie_id !== undefined) {
      console.log(router.query.movie_id);
      const fetchDetailInfo = async () => {
        try {
          await axios
            .get(
              `http://localhost:8000/searchdetail?movie_id=${router.query.movie_id}`
            )
            .then((res) => {
              setSearchDetail(res.data.result);
              setMovieId(router.query.movie_id);
            });
          // setSearchCredit(res.data.result[1].credit);
          // console.log(res.data.result);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
      };
      fetchDetailInfo();
    } else {
      null;
    }
  }, [router.query.movie_id]);

  // console.log(searchDetail);
  // console.log(searchDetail);
  return (
    <>
      <div className="relative w-full h-[570px] bg-black">
        {searchDetail && (
          <Image
            src={`https://image.tmdb.org/t/p/original/${searchDetail[0].detail[0].backdrop_path}`}
            layout="fill"
            alt="backDrop"
            sizes="100%"
            objectFit="cover"
            className="opacity-20"
            priority
          />
        )}

        <div className="flex w-full h-full">
          <div className="flex justify-center items-center grow-0 h-full w-[438px]">
            <div className="relative w-[220px] h-[300px]">
              {searchDetail && (
                <Image
                  src={`https://image.tmdb.org/t/p/original/${searchDetail[0].detail[0].poster_path}`}
                  layout="fill"
                  alt="poster"
                  className="rounded-xl"
                  placeholder="blur"
                  sizes="100%"
                  blurDataURL={`https://image.tmdb.org/t/p/original/${
                    searchDetail && searchDetail[0].detail[0].poster_path
                  }`}
                  priority
                />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center grow-1 h-full w-full">
            {searchDetail &&
              [searchDetail[0].detail[0]].map((e: any, i: any) => {
                return (
                  <div key={i}>
                    <div className="p-5">
                      <div className="text-4xl">{e.title}</div>

                      <div className="text-base">{`${
                        e.release_date
                      } · ${e.genres.map((e: any, i: any) => {
                        return e.name;
                      })} · ${e.runtime}분`}</div>

                      <div className="text-base italic my-[24px]">
                        {e.tagline}
                      </div>

                      <div className="text-xl font-bold">개요</div>
                      <p className="mb-[30px]">{e.overview}</p>

                      <div className="flex">
                        <div className="mr-[185px] flex flex-col">
                          <div className="flex">
                            {searchDetail[1].credit.directing.map(
                              (e: any, i: number) => {
                                return (
                                  <p
                                    key={i}
                                    className="text-[15px] whitespace-nowrap font-semibold"
                                  >
                                    {e.name}
                                    {i + 1 !==
                                    searchDetail[1].credit.directing.length
                                      ? ','
                                      : null}
                                    &nbsp;
                                  </p>
                                );
                              }
                            )}
                          </div>
                          <p className="text-[12px]">Director</p>
                        </div>
                        <div>
                          {searchDetail[1].credit.writing.map(
                            (e: any, i: number) => {
                              return (
                                <p
                                  key={i}
                                  className="text-[15px] whitespace-nowrap font-semibold"
                                >
                                  {e.name}
                                  {i + 1 !==
                                  searchDetail[1].credit.writing.length
                                    ? ','
                                    : null}
                                  &nbsp;
                                </p>
                              );
                            }
                          )}
                          <p className="text-[12px]">Writer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="h-[350px] p-10">
          <div className="text-2xl mb-10">주요 출연진</div>
          <div>
            <div className="flex w-full h-[230px] space-x-5 overflow-x-scroll">
              {searchDetail &&
                searchDetail[1].credit.acting.map((e: any, i: any) => {
                  return (
                    <div
                      key={e.id}
                      className="snap-center shrink-0 overflow-hidden w-[150px] rounded-lg bg-slate-700"
                    >
                      <div className="relative h-[75%]">
                        <div className="relative h-full w-full">
                          <Image
                            src={baseUrl + e.profile_path}
                            layout="fill"
                            alt="profile"
                            sizes="100%"
                            objectFit="cover"
                            className="rounded-t-lg"
                            priority
                          />
                        </div>
                        <div className="p-2">
                          <div className="text-sm font-extrabold">{e.name}</div>
                          <div className="text-sm">{e.character}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="h-[500px] p-10">
          <div className=" text-2xl mb-10">예고편</div>
          <div className="flex justify-center w-full h-[355px]">
            <div className="flex w-[650px] h-full rounded-xl">
              <BackgroundMovie currID={movieId} />
            </div>
          </div>
        </div>
        <div className="h-[750px] p-10 border">
          <div className=" text-2xl mb-10">댓글</div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  );
}

export default Detail;
