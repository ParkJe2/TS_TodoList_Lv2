import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { newTodo } from "../redux/modules/todos";
import { Todo } from "../types";
import { St } from "./FormStyle";

const Form: React.FC = () => {
  const id = nanoid();
  const dispatch = useDispatch();

  const [todo, setTodo] = useState<Todo>({
    id,
    title: "",
    contents: "",
    isDone: false,
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const clickAddBtnHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.title) return alert("제목을 입력해주세요");
    if (!todo.contents) return alert("내용을 입력해주세요");

    dispatch(newTodo({ ...todo, id: String(Date.now()) }));

    setTodo({
      id,
      title: "",
      contents: "",
      isDone: false,
    });
  };

  return (
    <St.AddForm onSubmit={clickAddBtnHandler}>
      <St.Group>
        <St.AddInput
          name="title"
          value={todo.title}
          placeholder="제목을 입력해주세요"
          onChange={inputChangeHandler}
        />
        <St.AddInput
          name="contents"
          value={todo.contents}
          className="input-content"
          placeholder="내용을 입력해주세요"
          onChange={inputChangeHandler}
        />
        <St.AddBtn type="submit">추가하기</St.AddBtn>
      </St.Group>
    </St.AddForm>
  );
};

export default Form;
