import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  setIsLoginOpen: (param: boolean) => void;
};

function Login({ setIsLoginOpen }: Props) {
  return (
    <div className="absolute flex justify-end w-full z-50">
      <div className="relative">
        <div className="flex flex-col justify-center items-center lg:w-[350px] lg:h-[250px] md:w-[300px] md:h-[200px] w-[250px] h-[200px] bg-black/80 space-y-[5px] py-[auto]">
          {/* <h3 className="mb-[30px]">로그인</h3> */}
          <div className="flex items-center bg-white rounded-md w-[200px] h-[50px] space-x-5 px-[15px] hover:cursor-pointer ">
            <Image
              src="/asset/image/github.svg"
              width={20}
              height={20}
              alt="login"
            />
            <p className="text-black pl-[15px]">깃허브 로그인</p>
          </div>
          <div className="w-[200px] h-[50px] hover:cursor-pointer">
            <Image
              src="/asset/image/kakao_login_large_narrow.png"
              width={200}
              height={50}
              alt="kakaologin"
            />
          </div>
          <div className="flex items-center bg-white rounded-md w-[200px] h-[50px] space-x-5 px-[15px] hover:cursor-pointer">
            <Image
              src="/asset/image/google.png"
              width={20}
              height={20}
              alt="login"
            />
            <p className="text-black pl-[15px]">구글 로그인</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
