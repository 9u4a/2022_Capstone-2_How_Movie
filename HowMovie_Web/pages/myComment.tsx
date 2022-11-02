import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Comment from '../components/Comment';

function MyComment() {
  const session = useSession();
  const [userEmail, setUserEmail] = useState<any>();
  const [myComment, setMyComment] = useState<any>();

  useEffect(() => {
    const fetchMyComment = async () => {
      if (userEmail !== undefined) {
        await axios
          .get(`http://localhost:8000/mycomment?email=${userEmail}`)
          .then((res) => {
            setMyComment(res.data.result);
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
      <Comment myComment={myComment} />
    </>
  );
}

export default React.memo(MyComment);
