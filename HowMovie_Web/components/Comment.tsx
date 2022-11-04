import React, { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

function Comment(props: any) {
  const [error, setError] = useState<Error>();
  const { commentInfo, movieInfo, myComment, session } = props;
  if (movieInfo !== undefined) {
    var { movieId } = movieInfo;
  } else if (myComment !== undefined) {
    var { movieName } = myComment;
  }
  useEffect(() => {}, [commentInfo, myComment]);
  const deleteComment = async (id: number, email: string, movieId: number) => {
    try {
      await axios.delete(`http://localhost:8000/comments`, {
        data: { id: id, email: email, movie_id: movieId },
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      }
    }
  };

  return (
    <>
      {commentInfo ? (
        [...commentInfo.result].reverse().map((e: any, i: number) => {
          return (
            <div className="h-[140px] p-5 bg-slate-800 mb-3" key={i}>
              <div className="flex text-sm mb-1 justify-between">
                <div>{e.user_name}</div>
                {session && session.data?.user.email === e.email ? (
                  <div
                    className="text-slate-500 hover:text-white active:text-slate-400 hover:cursor-pointer"
                    onClick={() => {
                      if (window.confirm('정말로 삭제하시겠습니까?')) {
                        deleteComment(e.id, e.email, movieId);
                        location.reload();
                      } else {
                        null;
                      }
                    }}
                  >
                    삭제
                  </div>
                ) : null}
              </div>
              <div className="flex items-center justify-center mr-5 border w-[60px] rounded-md mb-3">
                <StarIcon width={15} height={15} />
                <p className="ml-2">{e.vote.toFixed(1)}</p>
              </div>
              <div>{e.comment}</div>
            </div>
          );
        })
      ) : myComment ? (
        <div className="p-3">
          {[...myComment].reverse().map((e: any, i: number) => {
            return (
              <div
                className="h-[140px] p-5 bg-slate-800 mb-3 rounded-xl"
                key={i}
              >
                <div className="flex text-sm mb-1 justify-between">
                  <div className="flex space-x-5">
                    <div>{e.user_name}</div>
                    <div className="italic text-slate-400">{e.movie_name}</div>
                  </div>
                  <div
                    className="text-slate-500 hover:text-white active:text-slate-400 hover:cursor-pointer"
                    onClick={() => {
                      if (window.confirm('정말로 삭제하시겠습니까?')) {
                        deleteComment(e.id, e.email, e.movie_id);
                        location.reload();
                      } else {
                        null;
                      }
                    }}
                  >
                    삭제
                  </div>
                </div>
                <div className="flex items-center justify-center mr-5 border w-[60px] rounded-md mb-3">
                  <StarIcon width={15} height={15} />
                  <p className="ml-2">{e.vote.toFixed(1)}</p>
                </div>
                <div>{e.comment}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
export default React.memo(Comment);
