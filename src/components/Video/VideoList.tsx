import React, { memo } from "react";
import styled from "styled-components";
import { propsType } from "../../types/types";
import VideoCard from "./VideoCard";

const Video = ({ videos, display }: propsType) => {
  const displayType: boolean = display.includes('watch') ? true : false;

  return (
    <VideoMainWrap displayType={displayType}>
      {videos && videos.map((video, index) => (
        <VideoCard
          key={index}
          video={video}
          display={display}
        />
      ))}
    </VideoMainWrap>
  );
};

export default memo(Video);

const VideoMainWrap = styled.ul < { displayType: boolean }>`
    display: grid;
    padding: ${(props) => (props.displayType ? '0' : '0 20px')};
    width: ${(props) => (props.displayType ? '30%' : '100%')};
    grid-template-rows: ${(props) => (props.displayType ? 'repeat(auto-fit, 1fr)' : 'repeat(5, 1fr)')};
    grid-template-columns: ${(props) => (props.displayType ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))')};
    column-gap: ${(props) => (props.displayType ? '0px' : '20px')};
    row-gap: 20px;
    margin-right: ${(props) => (props.displayType && '30px')};
    animation: ${(props) => (props.displayType ? 'width 0.8s forwards ease-in-out' : '0')};
    overflow-x: ${(props) => (props.displayType ? '0' : 'hidden')};

    @media all and (max-width: 1024px) {
        width: ${(props) => (props.displayType && '100%')};
        margin : ${(props) => (props.displayType === false && '0 30px')};
      }
      
      @media all and (max-width: 768px) {
        margin : ${(props) => (props.displayType === false && '0 30px')};
        grid-template-columns : ${(props) => (props.displayType === false && 'unset')};
      }
      
      @media all and (max-width: 480px) {
        margin : ${(props) => (props.displayType === false && '0px')};
      }

      @media all and (max-width: 400px) {
        margin : ${(props) => (props.displayType && '0 10px')};
      }
`;