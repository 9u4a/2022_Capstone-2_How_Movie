import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

function Comment() {
  return (
    <div className="h-[140px] p-5 bg-slate-800 mb-3 rounded-md">
      <div className="flex justify-between">
        <div className="text-sm mb-1">영화조아</div>
        <div className="space-x-3 text-sm">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="flex items-center justify-center border w-[55px] h-[25px] rounded-md mb-5">
        <StarIcon width={13} height={13} className="text-[#d70000]" />{' '}
        <p className="ml-2 text-sm">5.0</p>
      </div>
      <p>진짜 재밌어요</p>
    </div>
  );
}

export default Comment;
