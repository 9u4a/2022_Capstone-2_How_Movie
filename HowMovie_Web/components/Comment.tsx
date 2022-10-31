import React, { useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

function Comment({ commentInfo }: any) {
  console.log(commentInfo);

  // useEffect(() => {}, [testProps]);

  return (
    <>
      {commentInfo.result.map((e: any, i: number) => {
        return (
          <div className="h-[140px] p-5 bg-slate-800 mb-3" key={i}>
            <div className="flex text-sm mb-1 justify-between">
              <div>{e.user_id}</div>
              <div className="text-slate-500 hover:text-white active:text-slate-400 hover:cursor-pointer">
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
