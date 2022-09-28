import React from 'react';
import BackgroundMovie from '../pages/BackgroundMovie';

type MovieDetailProps = {
  setDetailOpen: (param: boolean) => void;
};

function MovieDetail({ setDetailOpen }: MovieDetailProps) {
  const closeDetail = () => {
    setDetailOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-black/80 w-full h-screen absolute z-50 border border-red-600">
      <div className="flex flex-col text-left items-end w-[80%] h-[850px] bg-gray-900 rounded-xl">
        <div className="">
          <button
            className="w-[30px] h-[30px] m-5 rounded-full z-50 absolute right-[70px] bg-slate-300"
            onClick={closeDetail}
          >
            X
          </button>
        </div>
        <BackgroundMovie />
        <div className="w-full mt">asdasdasd</div>
      </div>
    </div>
  );
}

export default MovieDetail;
