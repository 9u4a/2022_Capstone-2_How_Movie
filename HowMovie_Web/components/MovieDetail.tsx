import React from 'react';
import BackgroundMovie from './BackgroundMovie';

type MovieDetailProps = {
  setDetailOpen: (param: boolean) => void;
};

function MovieDetail({ setDetailOpen }: MovieDetailProps) {
  const closeDetail = () => {
    setDetailOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-black/80 w-full h-screen absolute z-50">
      <div className="flex flex-col items-end w-[80%] h-[850px] bg-gray-900 rounded-xl">
        <div className="flex justify-end absolute">
          <button
            className="w-[30px] h-[30px] m-5 rounded-full z-50 right-[80px] bg-slate-300"
            onClick={closeDetail}
          >
            X
          </button>
        </div>
        <div className="w-full h-full max-h-[350px]">
          <BackgroundMovie />
        </div>
        <div className="w-full mt-5 p-5">
          <h2>공조 2</h2>
          <h3>줄거리</h3>
          <p>
            공조 이즈 백! 이번엔 삼각 공조다! 남한으로 숨어든 글로벌 범죄 조직을
            잡기 위해 새로운 공조 수사에 투입된 북한 형사 림철령(현빈). 수사
            중의 실수로 사이버수사대로 전출됐던 남한 형사 강진태(유해진)는
            광수대 복귀를 위해 모두가 기피하는 철령의 파트너를 자청한다.
            <br />
            이렇게 다시 공조하게 된 철령과 진태! 철령과 재회한 민영(임윤아)의
            마음도 불타오르는 가운데, 철령과 진태는 여전히 서로의 속내를
            의심하면서도 나름 그럴싸한 공조 수사를 펼친다. <br />
            드디어 범죄 조직 리더인 장명준(진선규)의 은신처를 찾아내려는 찰나,
            미국에서 날아온 FBI 소속 잭(다니엘 헤니)이 그들 앞에 나타나는데…!
            아직도 짠내 나는 남한 형사, 여전한 엘리트 북한 형사, . . .
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
