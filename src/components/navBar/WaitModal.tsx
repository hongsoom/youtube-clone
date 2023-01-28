import React, { PropsWithChildren } from "react";
import styled from 'styled-components';

interface ModalDefaultType {
    onClickButton: () => void;
}

const WaitModal = ({ onClickButton }: PropsWithChildren<ModalDefaultType>) => {

    return (
        <Overlay onClick={onClickButton}>
            <ModalWrap >
                <Contents>
                    <h1>죄송합니다! 아직 준비중입니다🙇‍♀️</h1>
                    <Button onClick={onClickButton}>Close</Button>
                </Contents>
            </ModalWrap>
        </Overlay>
    );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export default WaitModal;