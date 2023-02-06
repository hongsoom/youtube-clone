import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrap>
      <i className="fas fa-spinner fa-5x fa-spin"></i>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff0000;
`;

