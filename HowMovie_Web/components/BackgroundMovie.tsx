import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Props {
  currID: number | undefined;
}

const BackgroundMovie = ({ currID }: Props) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [moviePath, setMoviePath] = useState<any>('');
  const [backDrop, setBackDrop] = useState<any>('');

  useEffect(() => {
    const fetchBackgroundPath = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8000/moviedetails?movie_id=${currID}`
        );
        setBackDrop(res.data.result[0].detail[0].backdrop_path);
        setMoviePath(res.data.result[0].detail[0].video);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
      }
      setLoading(false);
    };
    fetchBackgroundPath();
  }, [currID]);

  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;
  !moviePath && null;

  return moviePath ? (
    <>
      {moviePath.length !== 0 ? (
        <div className="relative w-full max-w-[1000px] pb-[350px] bg-black rounded-xl">
          <iframe
            className="w-full h-full max-h-[350px] absolute rounded-xl"
            src={`https://www.youtube.com/embed/${moviePath}?fs=0&modestbranding=1&disablekb=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : backDrop !== '' ? (
        <div className="relative w-full max-w-[1000px] pb-[350px] bg-black rounded-t-xl">
          <Image
            src={baseUrl + backDrop}
            layout="fill"
            alt="backDrop"
            className="rounded-xl"
            placeholder="blur"
            objectFit="cover"
            blurDataURL={baseUrl + backDrop}
          />
        </div>
      ) : null}
    </>
  ) : (
    <>
      <div className="text-white relative w-full max-w-[1000px] h-[350px] bg-black rounded-t-xl">
        <div className="w-full h-full max-h-[350px] absolute rounded-xl flex justify-center items-center">
          <svg
            className="animate-spin"
            width="100"
            height="100"
            viewBox="0 0  24 24"
            color="#434343"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-7"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BackgroundMovie;
