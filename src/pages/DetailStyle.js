import styled from "styled-components";

export const St = {
  DetailList: styled.div`
    width: 100%;
    height: 130px;

    font-size: 20px;

    padding-left: 2rem;
    border-radius: 10px;
    margin-bottom: 1.875rem;

    background-color: #e8e2e2;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  DetailContainer: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 0.625rem;
    justify-content: center;
    word-break: break-all;
  `,

  DetailWrap: styled.div`
    width: 600px;
    height: 330px;
    border: 3px solid #4f4557;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 2.8rem;
    word-break: break-all;
  `,

  DetailHeader: styled.header`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 1.5rem;
    align-items: center;
  `,

  DetailId: styled.div`
    font-size: 21px;
    color: #4f4557;
    padding: 11.25rem 0 3.125rem 0.375rem;
  `,

  BackBtn: styled.button`
    width: 150px;
    height: 50px;
    margin-top: 0.9375rem;
    /* border: 1px solid #f5f5f5; */
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 22px;
    color: #4f4557;

    background-color: transparent;
  `,

  DetailTitle: styled.h2`
    padding: 5.625rem 0 1.875rem 1.875rem;
    font-size: 22px;
    color: #4f4557;
  `,

  DetailContents: styled.div`
    padding-left: 1.875rem;
    font-size: 17px;
    color: #4f4557;
  `,
};
