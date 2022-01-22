import React from "react";
import { Link } from "react-router-dom";

type PostListPropsType = {
  data: { id: number; header: string; content: string }[];
};

const PostsList: React.FC<PostListPropsType> = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`/posts/${el.id}`}>{el.header}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
