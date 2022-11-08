import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Comment from '../components/Comment';

function MyComment() {
  const session = useSession();
  const [userEmail, setUserEmail] = useState<any>();
  const [myComment, setMyComment] = useState<any>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchMyComment = async () => {
      if (userEmail !== undefined) {
        await axios
          .get(`http://localhost:8000/comments?email=${userEmail}`)
          .then((res) => {
            setMyComment(res.data.result);
          })
          .catch((err) => {
            if (axios.isAxiosError(err)) {
              setError(err);
            }
          });
      }
    };

    if (session.data !== undefined) {
      setUserEmail(session.data?.user?.email);
      fetchMyComment();
    }
  }, [session.data, userEmail]);

  return (
    <>
      {!error ? (
        session.data ? (
          <>
            <h3 className="p-5 pb-2">내 댓글</h3>
            {myComment && myComment.length !== 0 ? (
              <Comment myComment={myComment} />
            ) : (
              <h3 className="flex mt-[15%] justify-center items-center">
                🚨 작성하신 댓글이 없습니다.
              </h3>
            )}
          </>
        ) : (
          <h3 className="flex mt-[15%] justify-center items-center">
            🚨 로그인 후 이용해주세요.
          </h3>
        )
      ) : (
        <h3 className="flex mt-[15%] justify-center items-center">
          🚨 서버와 연결을 확인해주세요.
        </h3>
      )}
    </>
  );
}

export default React.memo(MyComment);
