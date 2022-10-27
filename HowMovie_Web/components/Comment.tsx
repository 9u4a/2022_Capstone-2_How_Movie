import React, { useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
// interface sessionType {
//   data: {
//     expries: string;
//     user: {
//       email: string;
//       iamge: string;
//       name: string;
//     };
//   };
//   status: string;
// }
function Comment({ testProps }: any) {
  console.log(testProps);
  // useEffect(() => {}, [testProps]);

  return (
    <>
      {testProps === undefined ? (
        <div className="h-[140px] p-5 bg-slate-800 mb-3">
          <div className="text-sm mb-1">대림이</div>
          <div className="flex items-center justify-center mr-5 border w-[60px] rounded-md mb-5">
            <StarIcon width={15} height={15} /> <p className="ml-2">3.6</p>
          </div>
          <p>연기가 조금 아쉬웠요..</p>
        </div>
      ) : (
        <div className="h-[140px] p-5 bg-slate-800 mb-3">
          <div className="text-sm mb-1">
            {testProps?.session.data.user.name}
          </div>
          <div className="flex items-center justify-center mr-5 border w-[60px] rounded-md mb-5">
            <StarIcon width={15} height={15} />{' '}
            <p className="ml-2">{testProps?.starClick.toFixed(1)}</p>
          </div>
          <p>{testProps?.userComment}</p>
        </div>
      )}
    </>
  );
}

export default Comment;
