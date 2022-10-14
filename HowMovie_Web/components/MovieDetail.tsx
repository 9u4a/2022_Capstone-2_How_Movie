import React from 'react';
import BackgroundMovie from './BackgroundMovie';
import axios from 'axios';
import testAPI from '../pages/api/testAPI.json';
import { XMarkIcon } from '@heroicons/react/24/solid';

type MovieDetailProps = {
  setDetailOpen: (param: boolean) => void;
  currID: number;
};

function MovieDetail({ setDetailOpen, currID }: MovieDetailProps) {
  const closeDetail = () => {
    setDetailOpen(false);
  };

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
    <div className="flex justify-center items-center bg-black/80 w-full h-full fixed z-[200] top-[0px]">
      <div className="flex flex-col items-end w-[1000px] max-w-[80%] h-[850px] bg-gray-900 rounded-xl">
        <div className="flex justify-end absolute ">
          <button
            className="w-[30px] h-[30px] m-5 rounded-full z-50 right-[80px] p-1 bg-slate-300 "
            onClick={closeDetail}
          >
            <XMarkIcon />
          </button>
        </div>

        {test.result.map((e, i) => {
          return (
            <div key={i}>
              <div className="w-full h-full max-h-[350px] rounded-t-xl">
                <BackgroundMovie currID={currID} />
              </div>
              <div className="w-full mt-5 p-5">
                <h2>{e.title}</h2>
                <h3>줄거리</h3>
                <p>{e.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieDetail;
