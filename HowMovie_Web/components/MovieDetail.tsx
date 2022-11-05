import React, { useEffect, useState } from 'react';
import BackgroundMovie from './BackgroundMovie';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface detailInfoType {
  detail: string[];
  credit: string[];
}
interface MovieDetailProps {
  setDetailOpen: (param: boolean) => void;
  currID: number;
  // detailInfo:;
}

function MovieDetail({ setDetailOpen, currID }: MovieDetailProps) {
  const [detailInfo, setDetailInfo] = useState<any>();
  const [creditInfo, setCreditInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (currID !== undefined) {
      const fetchDetailInfo = async () => {
        try {
          setDetailInfo(null);
          setLoading(true);
          await axios
            .get(`http://localhost:8000/moviedetails?movie_id=${currID}`)
            .then((res) => {
              setDetailInfo(res.data.result[0].detail[0]);
              setCreditInfo(res.data.result[1].credit);
            });
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err);
          }
        }
        setLoading(false);
      };
      fetchDetailInfo();
    }
  }, [currID]);

  const closeDetail = () => {
    setDetailOpen(false);
    document.body.style.overflow = 'unset';
  };
  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;

  return (
    <div className="flex justify-center items-center bg-black/80 w-full h-full fixed z-[200] top-0 overflow-none mt-[50px]">
      <div className="flex justify-end fixed z-[300] top-[1%] right-[1%] mt-[50px]">
        <button
          className="w-[40px] h-[40px] m-5 rounded-full z-50 right-[80px] p-1 text-slate-400"
          onClick={closeDetail}
        >
          <XMarkIcon />
        </button>
      </div>
      {detailInfo ? (
        <div className="flex absolute flex-col items-end w-[80%] h-[80%] max-w-[1000px] max-h-[850px] bg-gray-900 rounded-xl top-[50%] translate-y-[-50%] overflow-scroll scrollbar-hide">
          <div className="w-full">
            <div className="w-full h-full max-h-[350px] rounded-t-xl">
              <BackgroundMovie currID={currID} />
            </div>
            <div className="w-full p-5 overflow-y-scroll">
              <h2>{detailInfo && detailInfo.title}</h2>
              <div className="flex lg:flex-row md:flex-col flex-col lg:space-x-3 space-x-0 lg:text-base md:text-base text-[15px]">
                <div className="flex space-x-3 items-center">
                  <div className="">{`${
                    detailInfo.release_date
                  } · ${detailInfo.genres.map((e: any, i: any) => {
                    return e.name;
                  })} · ${detailInfo.runtime}분`}</div>
                  <div className="flex items-center space-x-1">
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
                    <div>{detailInfo.vote_average.toFixed(1)}</div>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div>출연</div>
                  <div className="ml-1">
                    <p className="md:text-xs lg:text-xs text-[8px] mr-2">
                      {creditInfo.acting.map((e: any, i: any) => {
                        if (i < 2) {
                          return e.name + ', ';
                        } else if (i === 2) {
                          return e.name;
                        } else {
                          return;
                        }
                      })}
                    </p>
                  </div>
                  <Link href={`/detail?movie_id=${currID}`}>
                    <p
                      className="underline hover:cursor-pointer"
                      onClick={() => closeDetail()}
                    >
                      더보기
                    </p>
                  </Link>
                </div>
              </div>
              {detailInfo.tagline && (
                <div className="text-base italic my-[24px] mr-[50px]">
                  {`" ${detailInfo.tagline} "`}
                </div>
              )}
              <h4 className="my-3">줄거리</h4>
              <p>{detailInfo && detailInfo.overview}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MovieDetail;
