import React from "react";
import spinner from "../assets/Spinner.gif";
import styled from "styled-components";

const Spinner = () => {
    return (
        <SpinnerWrap>
            <SpinnerImg src={spinner} alt="로딩중" width="5%" />
            <SpinnerText>잠시만 기다려 주세요</SpinnerText>
        </SpinnerWrap>
    );
};

export default Spinner;

const SpinnerWrap = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SpinnerText = styled.p`
    font: 1rem 'Noto Sans KR';
    text-align: center;
`

const SpinnerImg = styled.img`
    animation: spin 2s linear infinite;

    @keyframes spin {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
    }
`


