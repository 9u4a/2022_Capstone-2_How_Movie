import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BackgroundMovie from '../components/BackgroundMovie';
import Comment from '../components/Comment';
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
  const { movieId, movieName } = movieInfo;
  // const [movieId, setMovieId] = useState<any>();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const [userInfo, setUserInfo] = useState<any>({
    userName: '',
    userEmail: '',
  });
  const router = useRouter();

  useEffect(() => {
    session
      ? setUserInfo({
          userName: session.data?.user?.name,
          userEmail: session.data?.user?.email,
        })
      : null;

    const fetchDetailInfo = async () => {
      if (movieId !== '') {
        try {
          const res = await axios.get(
            `http://localhost:8000/searchdetail?movie_id=${movieId}`
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
    };
    const getCommentInfo = async () => {
      if (movieId !== '') {
        try {
          const res = await axios.get(
            `http://localhost:8000/comment/${movieId}
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
    if (router.query.movie_id !== undefined) {
      setMovieInfo({
        movieId: router.query.movie_id,
        movieName: '',
      });
      // setMovieId(router.query.movie_id);
      fetchDetailInfo();
      getCommentInfo();
    }
    // }
  }, [router.query.movie_id, session, movieId]);

  return (
    <>
      {searchDetail ? (
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
              blurDataURL={`https://image.tmdb.org/t/p/original
            ${searchDetail[0].detail[0].backdrop_path}
          `}
            />
          ) : null}

          <div className="flex w-full h-full ">
            <div className="flex justify-center items-center  h-full w-[438px] ">
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
            <div className="flex justify-start items-center h-full w-full overflow-hidden">
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
                      {e.tagline && (
                        <div className="text-base italic my-[24px]">
                          {`" ${e.tagline} "`}
                        </div>
                      )}

                      <div className="text-xl font-bold">개요</div>
                      <p className="mb-[30px] w-full h-[140px] leading-5 text-ellipsis whitespace-normal overflow-hidden line-clamp-5 block border">
                        {e.overview}
                      </p>
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
            <Startreview
              session={session}
              userInfo={userInfo}
              movieInfo={movieInfo}
            />
            <hr className="border-slate-400 border-2 rounded-lg my-5" />
            {commentInfo && (
              <Comment commentInfo={commentInfo} movieInfo={movieInfo} />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
