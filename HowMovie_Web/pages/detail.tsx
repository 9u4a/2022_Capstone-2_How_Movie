import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BackgroundMovie from '../components/BackgroundMovie';
import Comment from '../components/Comment';
import LoadingSpinner from '../components/common/loadingSpinner';
import MovieList from '../components/MovieList';
import Startreview from '../components/Startreview';

function Detail() {
  const session = useSession();
  const [searchDetail, setSearchDetail] = useState<any>();
  const [commentInfo, setCommentInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [movieInfo, setMovieInfo] = useState<any>({
    movieId: '',
    movieName: '',
  });
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const [userInfo, setUserInfo] = useState<any>({
    userName: '',
    userEmail: '',
  });
  const router = useRouter();

  useEffect(() => {
    const movieId = router.query.movie_id;

    session.status === 'authenticated'
      ? setUserInfo({
          userName: session.data?.user?.name,
          userEmail: session.data?.user?.email,
        })
      : null;

    const fetchDetailInfo = async () => {
      if (movieId !== undefined) {
        try {
          setLoading(true);
          const res = await axios.get(
            `http://localhost:8000/searchdetails?movie_id=${movieId}`
          );
          setMovieInfo({
            movieId,
            movieName: res.data.result[0].detail[0].title,
          });
          setSearchDetail(res.data.result);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
      }
      setLoading(false);
    };
    const getCommentInfo = async () => {
      if (movieId !== undefined) {
        try {
          const res = await axios.get(
            `http://localhost:8000/comments?movie_id=${movieId}
            `
          );
          setCommentInfo(res.data);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
      }
    };
    session.status !== null ? (fetchDetailInfo(), getCommentInfo()) : null;
  }, [router.query.movie_id, session]);

  return (
    <>
      {!loading ? (
        searchDetail ? (
          <div className="relative w-full h-[570px] bg-black/70">
            {searchDetail[0].detail[0].backdrop_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/original${searchDetail[0].detail[0].backdrop_path}`}
                layout="fill"
                alt="backDrop"
                sizes="100%"
                objectFit="cover"
                className="opacity-20"
                priority
                placeholder="blur"
                blurDataURL={baseUrl + searchDetail[0].detail[0].backdrop_path}
              />
            ) : null}

            <div className="flex w-full h-full">
              <div className="flex justify-center items-center  h-full w-[438px] ">
                <div className="relative w-[200px] h-[300px] drop-shadow-br-md overflow-hidden rounded-xl">
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
              <div className="flex justify-start items-center h-full w-full overflow-hidden">
                {[searchDetail[0].detail[0]].map((e: any, i: any) => {
                  return (
                    <div key={i}>
                      <div className="p-5">
                        <div className="text-4xl">{e.title}</div>

                        <div className="text-base flex flex-col md:flex-row lg:flex-row">
                          {`${e.release_date} · ${e.genres.map(
                            (e: any, i: any) => {
                              return e.name;
                            }
                          )} · ${e.runtime}분 ·`}
                          <div className="flex items-center pl-1 space-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-[20px] h-[20px] text-[#d70000]"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div>{e.vote_average.toFixed(1)}</div>
                          </div>
                        </div>
                        <div></div>
                        {e.tagline && (
                          <div className="text-base italic my-[24px]">
                            {`" ${e.tagline} "`}
                          </div>
                        )}
                        {e.overview ? (
                          <>
                            <div className="text-xl font-bold">개요</div>
                            <p className="mb-[30px] w-full h-[120px] line-clamp-5 block">
                              {e.overview}
                            </p>
                          </>
                        ) : (
                          <div className="h-[20px]"></div>
                        )}
                        <div
                          className={`flex ${
                            searchDetail[1].credit.directing.length === 0
                              ? null
                              : 'space-x-[185px]'
                          }`}
                        >
                          <div
                            className={`flex flex-col ${
                              searchDetail[1].credit.directing.length === 0 &&
                              'hidden'
                            }`}
                          >
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
                            {searchDetail[1].credit.directing.length !== 0 ? (
                              <p className="text-[12px]">Director</p>
                            ) : null}
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
                            {searchDetail[1].credit.writing.length !== 0 ? (
                              <p className="text-[12px]">Writer</p>
                            ) : null}
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
                          <div className="relative h-full w-full rounded-t-lg overflow-hidden">
                            {e.profile_path ? (
                              <Image
                                src={baseUrl + e.profile_path}
                                layout="fill"
                                alt="profile"
                                sizes="100%"
                                objectFit="cover"
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
                                placeholder="blur"
                                className="bg-white/5"
                                blurDataURL="/asset/image/noImg.svg"
                                priority
                              />
                            )}
                          </div>
                          <div className="p-2">
                            <div className="text-sm font-extrabold">
                              {e.name}
                            </div>
                            <div className="text-sm">{e.character}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className={`${
                searchDetail[0].detail[0].video.length !== 0 &&
                searchDetail[0].detail[0].backdrop_path !== null
                  ? 'h-[500px]'
                  : null
              } p-10`}
            >
              {searchDetail[0].detail[0].video.length !== 0 ? (
                <div>
                  <div className=" text-2xl mb-10">예고편</div>
                  <div className="flex justify-center w-full h-[355px]">
                    <div className="flex w-full h-full rounded-xl drop-shadow-br-md justify-center">
                      <BackgroundMovie
                        detailInfo={searchDetail[0].detail[0]}
                        type="detail"
                      />
                    </div>
                  </div>
                </div>
              ) : searchDetail[0].detail[0].backdrop_path !== null ? (
                <div>
                  <div className=" text-2xl mb-10">포스터</div>

                  <div className="flex justify-center w-full h-[355px]">
                    <div className="flex w-full h-full rounded-xl drop-shadow-br-md justify-center">
                      <BackgroundMovie
                        detailInfo={searchDetail[0].detail[0]}
                        type="detail"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            {searchDetail[0].detail[0].recommendations.length !== 0 ? (
              <div className="h-[400px]">
                <div className=" text-2xl px-10 pt-10 pb-2">추천</div>
                <MovieList
                  type="recommendations"
                  listType={searchDetail[0].detail[0].recommendations}
                />
              </div>
            ) : null}
            <div className="p-10">
              <div className=" text-2xl mb-5">댓글</div>
              <Startreview
                session={session}
                userInfo={userInfo}
                movieInfo={movieInfo}
              />
              <hr className="border-slate-400 border-2 rounded-lg my-5" />
              {commentInfo && (
                <Comment
                  commentInfo={commentInfo}
                  movieInfo={movieInfo}
                  session={session}
                />
              )}
            </div>
          </div>
        ) : null
      ) : error ? (
        <h3 className="flex mt-[15%] justify-center items-center">
          🚨 서버와 연결을 확인해주세요.
        </h3>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}

export default Detail;
