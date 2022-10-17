import React, { useEffect, useState } from 'react';
import BackgroundMovie from './BackgroundMovie';
import axios from 'axios';
import testAPI from '../pages/api/testAPI.json';
import { XMarkIcon } from '@heroicons/react/24/solid';

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
  const [creditInfo, setCreditInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchDetailInfo = async () => {
      try {
        setDetailInfo(null);
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8000/moviedetail?movie_id=${currID}`
        );
        setDetailInfo(res.data.result[0].detail[0]);
        console.log(detailInfo.title);
        // setCreditInfo(res.data.result[0].credit[0]);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
      }
      setLoading(false);
    };
    fetchDetailInfo();
  }, []);
  const closeDetail = () => {
    setDetailOpen(false);
  };

  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;

  return (
    <div className="flex justify-center items-center bg-black/80 w-full h-full fixed z-[200] top-0 overflow-scroll">
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
            <h3>줄거리</h3>
            <p>{detailInfo && detailInfo.overview}</p>
            <p>{detailInfo && detailInfo.overview}</p>
            <p>{detailInfo && detailInfo.overview}</p>
            <p>{detailInfo && detailInfo.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
