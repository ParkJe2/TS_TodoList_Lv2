import styled from "styled-components";

export const St = {
  AddForm: styled.form`
    width: 100%;
    height: 130px;

    border-radius: 10px;
    margin-bottom: 1.875rem;

    background-color: #e8e2e2;
  `,

  Group: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 3.125rem;
  `,

  AddInput: styled.input`
    width: 25%;
    height: 35px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 0 5px 15px;
    padding-left: 15px;
    font-size: 15px;
  `,

  AddBtn: styled.button`
    width: 80px;
    height: 35px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    color: #fff;
    font-size: 15px;

    margin: 0 0 7px 25px;
    background-color: #4f4557;
  `,
};
