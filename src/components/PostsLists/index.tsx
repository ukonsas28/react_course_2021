import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { OnePostType } from "../../store/Posts/types";

type PostListPropsType = {
  data: OnePostType[];
};

const PostsList: React.FC<PostListPropsType> = (props) => {
  const { data } = props;
  const [currentElementId, setCurrentELementId] = useState(0);

  const ref = useRef<HTMLUListElement>(null);
  console.log(ref.current);

  return (
    <>
      <ul ref={ref} className="post_list_wrapper">
        {data.map((el) => (
          <li
            key={el.id}
            className={currentElementId === el.id ? "post_active" : ""}>
            <Link to={`/posts/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(event) => {
          const elemIndex = data.findIndex((el) =>
            el.title.includes(event?.target.value)
          );
          ref.current?.scroll(0, (elemIndex - 14) * 21);
          setCurrentELementId(data[elemIndex].id);
          console.log(elemIndex);
        }}
      />
    </>
  );
};

export default PostsList;
