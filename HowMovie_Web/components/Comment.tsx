import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

function Comment() {
  return (
    <div className="h-[140px] p-5 bg-slate-800 mb-3">
      <div className="text-sm mb-1">영화조아</div>
      <div className="flex items-center justify-center mr-5 border w-[60px] rounded-md mb-5">
        <StarIcon width={15} height={15} /> <p className="ml-2">5.0</p>
      </div>
      <p>진짜 재밌어요</p>
    </div>
  );
}

export default Comment;
