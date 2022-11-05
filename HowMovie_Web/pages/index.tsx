import type { NextPage } from 'next';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import MovieDetail from '../components/MovieDetail';
import MainPosters from '../components/MainPosters';
import MovieList from '../components/MovieList';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const [posters, setPosters] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const fetchPosters = async () => {
      try {
        setPosters(null);
        setLoading(true);
        const res = await axios.get('http://localhost:8000/main');
        setPosters(res.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
      }
      setLoading(false);
    };
    fetchPosters();
  }, []);
  // console.log(error && error.code === 'ERR_NETWORK');
  return (
    <>
      {!error ? (
        !loading ? (
          <div className="relative">
            <MainPosters
              listType={posters ? posters.result[3].upcoming : null}
            />
            <div className=" w-full ">
              <MovieList
                type="toprated"
                listType={posters ? posters.result[1].toprated : null}
              />
              <MovieList
                type="nowplaying"
                listType={posters ? posters.result[2].nowplaying : null}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-screen">
            <div className="flex w-full h-[50%] mt-[100px] justify-center px-10">
              <div className="flex w-full space-x-20">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return (
                    <div
                      className="w-[500px] h-full animate-pulse bg-slate-900 rounded-xl"
                      key={i}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className=" w-full h-[200px] px-10 mt-20 overflow-hidden">
              <div className="flex  w-full h-full space-x-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => {
                  return (
                    <div
                      className=" w-[120px] h-full animate-pulse bg-slate-900 rounded-xl"
                      key={i}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        )
      ) : (
        <h3 className="flex mt-[15%] justify-center items-center">
          🚨 서버와 연결을 확인해주세요.
        </h3>
      )}
    </>
  );
};

export default Home;
