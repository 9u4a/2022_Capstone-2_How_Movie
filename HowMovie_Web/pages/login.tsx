import { signIn, signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';

function Login() {
  const session = useSession();
  const router = useRouter();
  // useLayoutEffect(() => {
  //   if (session.status === 'authenticated') {
  //     router.replace('/');
  //   }
  // }, [session, router]);
  // console.log(session);
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
        priority
      />
      <div className="fixed flex justify-center items-center w-full h-full bg-gradient-to-t from-black via-black top-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-[20px]">로그인</h2>
          <div className="space-y-3">
            <div
              className="flex justify-between  items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[15px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700"
              onClick={() => {
                signIn('google', { callbackUrl: '/' });
              }}
            >
              <Image
                src="/asset/image/google_logo.svg"
                width={20}
                height={20}
                alt="login"
              />
              <p className="md:text-lg">구글 로그인</p>
              <div className="w-[30px]" />
            </div>
            <div
              className="flex justify-between items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[15px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700"
              onClick={() => signIn('naver', { callbackUrl: '/' })}
            >
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

            <div
              className="flex justify-between  items-center rounded-md w-[300px] md:w-[400px] lg:w-[500px] h-[50px] md:h-[55px] lg:h-[60px] space-x-5 px-[15px] hover:cursor-pointer hover:border-white border border-white/50 hover:text-white text-white/50 hover:font-semibold hover:duration-75 duration-700"
              onClick={() => {
                signIn('kakao', { callbackUrl: '/' });
              }}
            >
              <Image
                src="/asset/image/KakaoTalk_logo.svg"
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
  );
}

export default Login;
