import React, { useEffect, useState } from 'react';
import BackgroundMovie from './BackgroundMovie';
import axios from 'axios';
import testAPI from '../pages/api/testAPI.json';
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
            .get(`http://localhost:8000/moviedetail?movie_id=${currID}`)
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
  };
  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;

  return (
    <div className="flex justify-center items-center bg-black/80 w-full h-full fixed z-[200] top-0 overflow-scroll">
      {detailInfo ? (
        <div className="flex absolute flex-col items-end w-[1000px] max-w-[80%] max-h-[850px] bg-gray-900 rounded-xl top-[50px] overflow-scroll">
          <div className="flex justify-end absolute ">
            <button
              className="w-[30px] h-[30px] m-5 rounded-full z-50 right-[80px] p-1 bg-slate-300 "
              onClick={closeDetail}
            >
              <XMarkIcon />
            </button>
          </div>
          <div>
            <div className="w-full h-full max-h-[350px] rounded-t-xl">
              <BackgroundMovie currID={currID} />
            </div>
            <div className="w-full mt-5 p-5 mb-[100px]">
              <h2>{detailInfo && detailInfo.title}</h2>
              <div className="flex items-center">
                <div className="text-base">{`${
                  detailInfo.release_date
                } · ${detailInfo.genres.map((e: any, i: any) => {
                  return e.name;
                })} · ${detailInfo.runtime}분`}</div>
                <div className="relative bottom-2 ml-10">
                  <div className="text-base mb-3">출연</div>
                  <p className="text-xs">
                    {creditInfo.acting.map((e: any, i: any) => {
                      if (i < 3) {
                        return e.name + ', ';
                      } else {
                        return;
                      }
                    })}
                  </p>
                  <Link href={`/detail?movie_id=${currID}`}>
                    <p className="text-sm underline hover:cursor-pointer">
                      더보기
                    </p>
                  </Link>
                </div>
              </div>
              <div className="text-base italic my-[24px] mr-[50px]">
                {detailInfo.tagline}
              </div>
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
