import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TestContext } from "../../containers/App/TestContext";
import { OnePostType } from "../../store/Posts/types";
import style from "./PostsLists.module.scss";

type PostListPropsType = {
  data: OnePostType[];
};

const PostsList: React.FC<PostListPropsType> = (props) => {
  const { data } = props;
  const ref = useRef<HTMLUListElement>(null);
  const [searchElemId, setSearchElemId] = useState<number>();
  const context = useContext(TestContext);

  console.log(context);

  return (
    <>
      <ul ref={ref} className={style.post_list}>
        {data.map((el) => (
          <li
            key={el.id}
            className={el.id === searchElemId ? `${style.current_elem}` : ""}>
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
          setSearchElemId(data[elemIndex]?.id);
          ref.current?.scroll(0, (elemIndex - 13) * 20);
        }}
      />
    </>
  );
};

export default PostsList;
