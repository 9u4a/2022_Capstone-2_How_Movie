import React from 'react';

function MainpageLoading() {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className="flex w-full h-[50%] mt-[100px] justify-center px-10 ">
          <div className="flex w-full space-x-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
              return (
                <div
                  className="w-[200px] h-[299px] md:w-[270px] md:h-[403px] lg:w-[300px] lg:h-[431px] animate-pulse bg-slate-900 rounded-xl shrink-0 drop-shadow-br-md"
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
        <div className=" w-full h-full px-10 mt-20 overflow-hidden">
          <div className="flex  w-full h-[240px] space-x-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e, i) => {
              return (
                <div
                  className="md:w-[152px] md:h-[216px] w-[140px] h-[199px]  animate-pulse bg-slate-900 rounded-xl shrink-0 drop-shadow-br-md"
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
        <div className=" w-full h-full px-10 mt-5 overflow-hidden">
          <div className="flex  w-full h-[240px] space-x-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e, i) => {
              return (
                <div
                  className="md:w-[152px] md:h-[216px] w-[140px] h-[199px]  animate-pulse bg-slate-900 rounded-xl shrink-0 drop-shadow-br-md"
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainpageLoading;
