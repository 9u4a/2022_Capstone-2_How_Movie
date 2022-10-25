import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BackgroundMovie from '../components/BackgroundMovie';
import Comment from '../components/Comment';

function Detail() {
  const [searchDetail, setSearchDetail] = useState<any>();
  const [searchCredit, setSearchCredit] = useState<any>();
  const [commentInfo, setCommentInfo] = useState<any>();
  const [userComment, setUserComment] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [movieId, setMovieId] = useState<any>();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  const [starHover, setStarHover] = useState<number>(0);
  const [starClick, setStarClick] = useState<number>();
  // const profileBaseUrl = 'https://www.themoviedb.org/t/p/w276_and_h350_face';

  // console.log(searchDetail && searchDetail[1]);
  const router = useRouter();
  useEffect(() => {
    if (router.query.movie_id !== undefined) {
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
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
      };
      fetchDetailInfo();
    }
    const getCommentInfo = async () => {
      try {
        await axios
          .get(`jdbc:mariadb://localhost:3306/movie/${router.query.movie_id}`)
          .then((res) => {
            setCommentInfo(res);
          });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
      }
    };
    getCommentInfo();
  }, [router.query.movie_id]);

  const postComment = async ({ body }: any) => {
    try {
      const res = await axios
        .post(`jdbc:mariadb://localhost:3306/movie/review`, body)
        .then((res) => {
          console.log('status: ' + res.status);
        });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      }
    }
  };
  console.log(userComment);
  return (
    <>
      {searchDetail ? (
        <div className="relative w-full h-[570px] bg-black">
          <Image
            src={baseUrl + searchDetail[0].detail[0].backdrop_path}
            layout="fill"
            alt="backDrop"
            sizes="100%"
            objectFit="cover"
            className="opacity-20"
            priority
            placeholder="blur"
            blurDataURL={baseUrl + searchDetail[0].detail[0].backdrop_path}
          />

          <div className="flex w-full h-full">
            <div className="flex justify-center items-center grow-0 h-full w-[438px]">
              <div className="relative w-[220px] h-[300px] drop-shadow-br-md">
                {searchDetail && (
                  <Image
                    src={baseUrl + searchDetail[0].detail[0].poster_path}
                    layout="fill"
                    alt="poster"
                    className="rounded-xl"
                    placeholder="blur"
                    sizes="100%"
                    blurDataURL={
                      baseUrl + searchDetail[0].detail[0].poster_path
                    }
                    priority
                  />
                )}
              </div>
            </div>
            <div className="flex justify-start items-center grow-1 h-full w-full">
              {[searchDetail[0].detail[0]].map((e: any, i: any) => {
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
              <div className="flex w-full h-[250px] pb-[20px] space-x-5 overflow-x-scroll">
                {searchDetail[1].credit.acting.map((e: any, i: any) => {
                  return (
                    <div
                      key={e.id}
                      className="snap-center shrink-0 overflow-hidden w-[150px] rounded-lg bg-slate-700 drop-shadow-br-md"
                    >
                      <div className="relative h-[70%]">
                        <div className="relative h-full w-full">
                          {e.profile_path ? (
                            <Image
                              src={baseUrl + e.profile_path}
                              layout="fill"
                              alt="profile"
                              sizes="100%"
                              objectFit="cover"
                              className="rounded-t-lg"
                              placeholder="blur"
                              blurDataURL={baseUrl + e.profile_path}
                              priority
                            />
                          ) : (
                            <Image
                              src="/asset/image/noImg.svg"
                              layout="fill"
                              alt="profile"
                              sizes="100%"
                              objectFit="cover"
                              className="rounded-t-lg"
                              placeholder="blur"
                              blurDataURL="/asset/image/noImg.svg"
                              priority
                            />
                          )}
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
              <div className="flex w-[650px] h-full rounded-xl drop-shadow-br-md">
                <BackgroundMovie currID={movieId} />
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className=" text-2xl mb-10">댓글</div>
            <div className="flex flex-col w-full ">
              <div className="flex flex-col">
                <h4 className="">평점</h4>

                {/* starPoint */}
                <div className="w-[150px]">
                  <div
                    className="absolute  w-[150px] h-[30px] z-10"
                    onMouseMove={(e) => {
                      if (starClick === undefined) {
                        setStarHover(e.nativeEvent.offsetX);
                      }
                    }}
                    onClick={() => {
                      if (starClick === undefined) {
                        setStarClick(starHover / 30);
                      } else {
                        setStarClick(undefined);
                      }
                    }}
                  ></div>
                  <div className="flex items-center">
                    <div className="flex w-full">
                      {STAR_IDX_ARR.map((e, i) => {
                        return (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-[30px] h-[30px] text-slate-300 "
                          >
                            <clipPath id={`${e}StarClip`}>
                              <rect
                                width={`${
                                  starHover / 30 >= i
                                    ? 0.8 * starHover - 24 * i
                                    : 0
                                }`}
                                height="40"
                              />
                            </clipPath>
                            <path
                              id={`${e}Star`}
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              // transform="translate(-2 -2)"
                              clipRule="evenodd"
                            />
                            <use
                              clipPath={`url(#${e}StarClip)`}
                              href={`#${e}Star`}
                              fill="#d70000"
                            />
                          </svg>
                        );
                      })}
                    </div>
                    <h4 className="ml-2">
                      {starClick === undefined
                        ? (starHover / 30).toFixed(1)
                        : starClick.toFixed(1)}
                    </h4>
                  </div>
                </div>
              </div>
              <textarea
                className="w-full h-[100px] text-wthie bg-black border rounded-lg mt-3 p-5"
                placeholder="리뷰를 남겨주세요."
                onChange={(e) => setUserComment(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="w-[100px] h-[40px] border rounded-lg mt-2 bg-white text-black hover:bg-black hover:text-white duration-200 active:bg-slate-800"
                  onClick={() => postComment({ userComment, starClick })}
                >
                  등록
                </button>
              </div>
            </div>
            <hr className="border-slate-400 border-2 rounded-lg my-5" />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
