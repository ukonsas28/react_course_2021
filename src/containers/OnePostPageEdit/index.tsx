import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { makeRequest } from "../../network";
import { OnePostType } from "../../store/Posts/types";
import OnePostEdit from "../../components/OnePostEdit";

const OnePostPageEdit: React.FC = () => {
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

  return <OnePostEdit post={post} />;
};

export default OnePostPageEdit;
