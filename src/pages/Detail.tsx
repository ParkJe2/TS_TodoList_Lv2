import React, { useEffect } from "react";
import { getTodoById } from "../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { useNavigate, useParams } from "react-router-dom";
import { Todo } from "../types";
import { St } from "./DetailStyle";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Detail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const todo: Todo | undefined = useSelector((state: RootState) =>
    state.todos.todos.find((t) => t.id === id)
  );

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }
    dispatch(getTodoById(id));
    // 페이지가 로드될 때 getTodoById 액션을 디스패치해서 선택된 Todo 가져오기
  }, [dispatch, id, navigate]);

  return (
    <Layout>
      <Header />
      <St.DetailList>선택된 List의 상세 페이지 입니다.</St.DetailList>
      <St.DetailContainer>
        <St.DetailWrap>
          <div>
            {todo ? (
              <React.Fragment>
                <St.DetailHeader>
                  <St.DetailId>ID : {todo.id}</St.DetailId>
                  <St.BackBtn
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    이전으로 🏠
                  </St.BackBtn>
                </St.DetailHeader>
                <St.DetailTitle>제목 : {todo.title}</St.DetailTitle>
                <St.DetailContents>내용 : {todo.contents}</St.DetailContents>
              </React.Fragment>
            ) : (
              <p>해당하는 TODO가 없습니다.</p>
            )}
          </div>
        </St.DetailWrap>
      </St.DetailContainer>
    </Layout>
  );
};

export default Detail;
