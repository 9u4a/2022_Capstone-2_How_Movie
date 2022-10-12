import Image from 'next/image';
import React, { useState } from 'react';

function Login() {
  return (
    <div className="relative">
      <Image
        src="/asset/image/backDrop.png"
        alt="backDrop"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="fill"
        className="absolute"
      />
      <div className="fixed flex justify-center items-center w-full h-full bg-gradient-to-t from-black via-black top-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-[20px]">로그인</h2>
          <div className="space-y-3">
            <div className="flex justify-between  items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[15px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700">
              <Image
                src="/asset/image/google_logo.svg"
                width={20}
                height={20}
                alt="login"
              />
              <p className="md:text-lg">구글 로그인</p>
              <div className="w-[30px]" />
            </div>
            <div className="flex justify-between items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[15px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700">
              <Image
                src="/asset/image/naver_logo.png"
                width={20}
                height={20}
                alt="login"
                className=""
              />
              <p className="md:text-lg">네이버 로그인</p>
              <div className="w-[40px]" />
            </div>
            {/* <div className="flex justify-between items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[10px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700">
              <Image
                src="/asset/image/github_logo_white.svg"
                width={30}
                height={30}
                alt="login"
                className=""
              />
              <p className="md:text-lg">깃허브 로그인</p>
              <div className="w-[40px]" />
            </div> */}
            <div className="flex justify-between  items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[15px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700">
              <Image
                src="/asset/image/kakaoTalk_logo.svg"
                width={20}
                height={20}
                alt="login"
              />
              <p className="md:text-lg">카카오 로그인</p>
              <div className="w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="absolute flex justify-end w-full z-50">
    //   <div className="relative">
    //     <div className="flex flex-col justify-center items-center lg:w-[350px] lg:h-[250px] md:w-[300px] md:h-[200px] w-[250px] h-[200px] bg-black/80 space-y-[5px] py-[auto]">
    //       {/* <h3 className="mb-[30px]">로그인</h3> */}
    //       <div className="flex items-center bg-white rounded-md w-[200px] h-[50px] space-x-5 px-[15px] hover:cursor-pointer ">
    //         <Image
    //           src="/asset/image/github.svg"
    //           width={20}
    //           height={20}
    //           alt="login"
    //         />
    //         <p className="text-black pl-[15px]">깃허브 로그인</p>
    //       </div>
    //       <div className="w-[200px] h-[50px] hover:cursor-pointer">
    //         <Image
    //           src="/asset/image/kakao_login_large_narrow.png"
    //           width={200}
    //           height={50}
    //           alt="kakaologin"
    //         />
    //       </div>
    //       <div className="flex items-center bg-white rounded-md w-[200px] h-[50px] space-x-5 px-[15px] hover:cursor-pointer">
    //         <Image
    //           src="/asset/image/google.png"
    //           width={20}
    //           height={20}
    //           alt="login"
    //         />
    //         <p className="text-black pl-[15px]">구글 로그인</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
