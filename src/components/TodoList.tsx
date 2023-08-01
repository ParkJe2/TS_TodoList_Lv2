import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { RootState } from "../redux/config/configStore";
import { Todo } from "../types";
import { St } from "./TodoListStyle";
import { Link } from "react-router-dom";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const clickDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const clickToggleStatusTodo = (id: string) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <St.ListContainer>
      {["WORKING", "DONE"].map((status) => (
        <React.Fragment key={status}>
          <St.ListTitle>
            {status === "WORKING" ? "WORKING LIST...🔖" : "DONE LIST...🥳"}
          </St.ListTitle>
          <St.TodoWrap>
            {todos.map((t: Todo) => {
              if ((status === "WORKING" && !t.isDone) || (status === "DONE" && t.isDone)) {
                return (
                  <St.TodoContainer key={t.id}>
                    <Link to={`/${t.id}`} key={t.id}>
                      {/* 선택된 Todo 상세 페이지 이동 링크 */}
                      <St.DetailBtn>상세보기</St.DetailBtn>
                    </Link>
                    <St.TodoList>
                      <St.TodoTitle>{t.title}</St.TodoTitle>
                      <St.TodoContents>{t.contents}</St.TodoContents>
                    </St.TodoList>
                    <St.Btns>
                      <St.DelBtn onClick={() => clickDeleteTodo(t.id)}>삭제하기</St.DelBtn>
                      <St.DoneBtn onClick={() => clickToggleStatusTodo(t.id)}>
                        {t.isDone ? "취소" : "완료"}
                      </St.DoneBtn>
                    </St.Btns>
                  </St.TodoContainer>
                );
              } else {
                return null;
              }
            })}
          </St.TodoWrap>
        </React.Fragment>
      ))}
    </St.ListContainer>
  );
};

export default TodoList;
