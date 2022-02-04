import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../network";
import { OnePostType } from "../../store/Posts/types";
import Input from "../common/Input";

type OnePostPropsType = {
  post: OnePostType;
};

const OnePostEdit: React.FC<OnePostPropsType> = (props) => {
  const {
    post: { title, body },
  } = props;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  console.log(titleValue);

  useEffect(() => {
    setTitleValue(title);
    setBodyValue(body);
  }, [title, body]);

  const submit = () => {
    makeRequest({
      method: "POST",
      url: "posts",
      data: { title: titleValue, body: bodyValue, userId: 1 },
    });
  };

  return (
    <div>
      <Input
        value={titleValue}
        setValue={setTitleValue}
        placeholder="Введите title"
        type="text"
        title="Title"
      />
      <Input
        value={bodyValue}
        setValue={setBodyValue}
        placeholder="Введите body"
        type="text"
        title="User Last Name"
      />
      <button type="button" onClick={goBack}>
        Назад
      </button>
      <button type="button" onClick={submit}>
        Редактировать
      </button>
    </div>
  );
};

export default OnePostEdit;
