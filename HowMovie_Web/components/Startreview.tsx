import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Startreview(props: any) {
  const [error, setError] = useState<Error>();
  const { session, userInfo, movieInfo } = props;
  const { movieId, movieName } = movieInfo;
  const { userName, userEmail } = userInfo;
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  const [starHover, setStarHover] = useState<number>(0);
  const [starClick, setStarClick] = useState<number>();
  const [userComment, setUserComment] = useState<string>();

  const postComment = async (props: any) => {
    const body = {
      movie_id: movieId,
      movie_name: movieName,
      user_name: userName,
      email: userEmail,
      vote: starClick,
      comment: userComment,
    };
    try {
      await axios.post(`http://localhost:8000/comments`, body).then((res) => {
        location.reload();
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
        alert('평점과 댓글을 제대로 입력해주세요.');
      }
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <h4 className="">평점</h4>
          {/* starPoint */}
          <div
            className={`w-[150px] ${
              session.status !== 'authenticated' ? 'pointer-events-none' : null
            }`}
          >
            <div
              className="absolute  w-[150px] h-[30px] z-10"
              onMouseMove={(e) => {
                if (starClick === undefined) {
                  setStarHover(e.nativeEvent.offsetX);
                }
              }}
              onClick={() => {
                if (starClick === undefined) {
                  setStarClick(parseFloat((starHover / 30).toFixed(1)));
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
                            starHover / 30 >= i ? 0.8 * starHover - 24 * i : 0
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
          className={`w-full h-[100px] text-wthie bg-black border rounded-lg mt-3 p-5 ${
            session.status !== 'authenticated' ? 'pointer-events-none' : null
          }`}
          value={userComment}
          placeholder={
            session.status !== 'authenticated'
              ? '로그인을 해주세요.'
              : '리뷰를 남겨주세요.'
          }
          onChange={(e) => setUserComment(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="w-[100px] h-[40px] border rounded-lg mt-2 bg-white text-black hover:bg-black hover:text-white duration-200 active:bg-slate-800"
            onClick={() =>
              session.status !== 'authenticated'
                ? alert('로그인을 해주세요.')
                : (postComment({
                    movieId,
                    userName,
                    userEmail,
                    starClick,
                    userComment,
                  }),
                  setStarClick(0),
                  setStarHover(0),
                  setUserComment(''))
            }
          >
            등록
          </button>
        </div>
      </div>
    </>
  );
}

export default Startreview;
