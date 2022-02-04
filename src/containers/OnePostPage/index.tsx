import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import OnePost from "../../components/OnePost";
import { makeRequest } from "../../network";
import { OnePostType } from "../../store/Posts/types";

const OnePostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<OnePostType>({} as OnePostType);

  useEffect(() => {
    const fetchData = async () => {
      const data = await makeRequest({ url: "posts", params: { id } });
      console.log(data);

      setPost(data[0]);
    };
    fetchData();
  }, [setPost]);

  return <OnePost post={post} />;
};

export default OnePostPage;
// useEffect(() => {
//   const fetchData = async () => {
//     const data = await makeRequest({
//       method: "POST",
//       url: "posts",
//       data: { title: "foo", body: "bar", userId: 1 },
//     });
//     console.log(data);
//   };
//   fetchData();
// }, []);
