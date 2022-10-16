import Image from 'next/image';
import React from 'react';

function Detail() {
  const profileBaseUrl = 'https://www.themoviedb.org/t/p/w276_and_h350_face';
  const test = {
    result: [
      {
        genres: [
          {
            id: 28,
            name: '액션',
          },
          {
            id: 35,
            name: '코미디',
          },
          {
            id: 53,
            name: '스릴러',
          },
        ],
        title: '불릿 트레인',
        overview:
          '운이 없기로 유명한 킬러 레이디버그는 초고속 열차에 탑승해 의문의 서류 가방을 가져오라는 미션을 받는다. 생각보다 쉽게 미션을 클리어한 후 열차에서 내리려는 그를 가로막는 것이 있었으니,  그것은 바로 전세계에서 몰려든 초특급 킬러들. 열차에서 내릴 수 없다면 목숨을 걸고 가방을 지켜야만 한다. 과연 레이디버그는 무사히 열차에서 내려 미션을 완수할 수 있을까?',
        poster_path: '/msh4N8dxHk4FeEPZ8VBqHQFQYjI.jpg',
        backdrop_path: '/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg',
        release_date: '2022-07-03',
        vote_average: 7.469,
        vote_count: 1373,
        status: 'Released',
        runtime: 127,
        tagline: '누구도 멈출 수 없는 논스톱 액션 블록버스터',
        profile: '/zNL7sRWVPYTT5d6dYQOZkJOE7LY.jpg',
        video: [
          {
            video: '4OJVhxRXvMU',
          },
          {
            video: 'pVnq1vuXfMQ',
          },
          {
            video: '_ics0ClH5TQ',
          },
          {
            video: 'Parm2gQvHiA',
          },
          {
            video: 'vR5cn7O46TU',
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="relative w-full h-[570px]  border border-red-500 bg-black">
        <Image
          src="https://image.tmdb.org/t/p/original/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg"
          layout="fill"
          alt="backDrop"
          className="opacity-20"
        />
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center grow-0 h-full w-[438px] border border-green-500">
            <div className="relative w-[210px] h-[350px]">
              <Image
                src="https://image.tmdb.org/t/p/original/msh4N8dxHk4FeEPZ8VBqHQFQYjI.jpg"
                layout="fill"
                alt="poster"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-center items-center grow-1 h-full w-full border border-blue-500">
            {test.result.map((e, i) => {
              return (
                <div key={i}>
                  <div className="p-5">
                    <div className="text-4xl">{e.title}</div>

                    <div className="text-base">{`${
                      e.release_date
                    } · ${e.genres.map((e, i) => {
                      return e.name;
                    })} · ${e.runtime}분`}</div>

                    <div className="text-base italic my-[24px]">
                      {e.tagline}
                    </div>

                    <div className="text-xl font-bold">개요</div>
                    <p className="mb-[30px]">{e.overview}</p>

                    <div className="flex">
                      <div className="mr-[185px]">
                        <b>Lee Suck Hoon</b>
                        <p>Director</p>
                      </div>
                      <div>
                        <b>Im Seong-soon</b>
                        <p>Writer</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[350px] p-10 border border-green-600">
          <div className="text-2xl mb-10">주요 출연진</div>
          <div>
            <div className="flex w-full h-[230px] snap-x snap-mandatory overflow-x-scroll z-20 bg-gradient-to-b from-[trasparent] via-black/80 to-[#141414]/80 space-x-5 scrollbar-hide border">
              <div className="w-[150px] rounded-lg bg-slate-500">
                <div className="h-[70%] border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
