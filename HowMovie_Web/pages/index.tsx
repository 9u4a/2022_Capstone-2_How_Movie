import type { NextPage } from 'next';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import MovieDetail from '../components/MovieDetail';
import MainPosters from '../components/MainPosters';
import MovieList from '../components/MovieList';

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

  loading && <div>로딩중</div>;
  error && <div>에러 발생</div>;
  !posters && null;
  return (
    <div className="relative">
      <MainPosters listType={posters ? posters.result[3].upcoming : null} />
      <div className=" w-full ">
        <MovieList
          type="toprated"
          // setDetailOpen={setDetailOpen}
          // setCurrID={setCurrID}
          listType={posters ? posters.result[1].toprated : null}
        />
        <MovieList
          type="nowplaying"
          // setDetailOpen={setDetailOpen}
          // setCurrID={setCurrID}
          listType={posters ? posters.result[2].nowplaying : null}
        />
      </div>
    </div>
  );
};

export default Home;
