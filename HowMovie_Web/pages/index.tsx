import type { NextPage } from 'next';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import MainPosters from '../components/MainPosters';
import MovieList from '../components/MovieList';
import MainpageLoading from '../components/common/MainpageLoading';

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
          <MainpageLoading />
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
