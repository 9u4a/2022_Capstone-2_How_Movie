import React, { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

function Comment(props: any) {
  const [error, setError] = useState<Error>();
  const { commentInfo, movieId } = props;
  // const [commentId, setCommentId] = useState();
  useEffect(() => {}, [commentInfo]);
  const deleteComment = async (id: number, email: string) => {
    console.log(id, email);
    try {
      await axios
        .delete(`http://localhost:8000/comment/${movieId}`, {
          data: { id: id, email: email },
        })
        .then((res) => {
          console.log('삭제');
          console.log('status: ' + res.status);
        });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      }
    }
  };

  return (
    <>
      {[...commentInfo.result].reverse().map((e: any, i: number) => {
        return (
          <div className="h-[140px] p-5 bg-slate-800 mb-3" key={i}>
            <div className="flex text-sm mb-1 justify-between">
              <div>{e.user_name}</div>
              <div
                className="text-slate-500 hover:text-white active:text-slate-400 hover:cursor-pointer"
                onClick={() => {
                  deleteComment(e.id, e.email);
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
    </>
  );
}

export default Comment;
