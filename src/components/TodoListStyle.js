import styled from "styled-components";

export const St = {
  ListContainer: styled.div`
    padding: 0 3.4375rem;
  `,

  ListTitle: styled.h2`
    font-size: 30px;
    font-weight: bold;

    margin: 25px;
  `,

  TodoWrap: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  `,

  TodoContainer: styled.div`
    width: 330px;
    min-height: 180px;

    margin-bottom: 15px;

    border: 3px solid #4f4557;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    word-break: break-all;
  `,

  DetailBtn: styled.button`
    display: absolute;
    float: right;
    font-size: 15px;
    border: none;
    cursor: pointer;
    padding-top: 5px;
    padding-right: 25px;
    background-color: transparent;
  `,

  TodoList: styled.div`
    padding-left: 20px;
  `,

  TodoTitle: styled.h2`
    font-size: 20px;
    font-weight: bold;
    padding: 5px 10px;
  `,

  TodoContents: styled.div`
    font-size: 18px;
    padding: 5px 10px;
  `,

  Btns: styled.div`
    width: 85%;
    padding: 20px 25px 15px;

    display: flex;

    gap: 15px;
  `,

  DelBtn: styled.button`
    width: 50%;
    height: 40px;

    background-color: transparent;

    border: 2px solid #f16767;
    border-radius: 5px;

    font-size: 15px;
    cursor: pointer;
  `,

  DoneBtn: styled.button`
    width: 50%;
    height: 40px;

    background-color: transparent;

    border: 2px solid #a459d1;
    border-radius: 5px;

    font-size: 15px;
    cursor: pointer;
  `,
};
