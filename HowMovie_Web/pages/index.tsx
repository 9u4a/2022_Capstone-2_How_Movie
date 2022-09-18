import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div className="relative w-full pb-[56%]">
        <iframe
          className="w-full h-full absolute"
          src="https://www.youtube.com/embed/g4qQXXtaMqc?autoplay=1&mute=1&fs=0&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; muted; controls=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div>HowMovie</div>
    </>
  );
};

export default Home;
