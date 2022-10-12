import { MoonIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Props {
  currID: number;
}

const BackgroundMovie = ({ currID }: Props) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [moviePath, setMoviePath] = useState<any>();
  const [backDrop, setBackDrop] = useState('');
  console.log(currID);
  useEffect(() => {
    const fetchBackgroundPath = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8000/moviedetail?movie_id=${currID}`
        );
        // console.log(res.data.result[0].detail[0].backdrop_path);
        setBackDrop(res.data.result[0].detail[0].backdrop_path);
        setMoviePath(res.data.result[0].detail[0].video[0].video);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
      }
      setLoading(false);
    };
    fetchBackgroundPath();
  }, [currID]);
  // console.log(currID);
  // console.log(moviePath);

  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;
  !moviePath && null;
  return (
    <>
      {moviePath !== undefined ? (
        <div className="relative w-full pb-[56.3%] max-h-[350px] bg-black rounded-t-xl">
          <iframe
            className="w-full h-full absolute from-black mt-[10px]"
            src={`https://www.youtube.com/embed/${moviePath}?autoplay=1&fs=0&modestbranding=1&disablekb=1&controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : (
        <div className="relative w-full pb-[56.3%] max-h-[350px] bg-black rounded-t-xl">
          <Image
            src={baseUrl + backDrop}
            layout="fill"
            alt="backDrop"
            className="rounded-t-xl"
          />
        </div>
      )}
      {/* <div className="relative w-full pb-[55%] max-h-[350px] bg-black rounded-t-xl">
        <iframe
          className="w-full h-full absolute from-black mt-[10px]"
          src={`https://www.youtube.com/embed/${moviePath}?autoplay=1&fs=0&modestbranding=1&disablekb=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div> */}
    </>
  );
};

export default BackgroundMovie;
