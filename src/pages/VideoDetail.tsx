import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from "../contenxt/YoutubeAPIContext";
import NavBar from "../components/NavBar/NavBar";
import VideoExecution from "../components/Video/VideoExecution";
import VideoList from "../components/Video/VideoList";
import MetaTag from "../shared/MetaTag";

const VideoDetail = () => {

  const location = useLocation();
  const pathname = location.pathname;

  const id = useParams().videoId;

  const youtube = useYoutubeApi();

  const {
    data: videos,
  } = useQuery(['search', id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <MetaTag video={location.state} />
      <NavBar />
      <VideoDetailWrap pathname={pathname}>
        <VideoExecution video={location.state} />
        <VideoList display={pathname} videos={videos} />
      </VideoDetailWrap>
    </>
  )
};
export default VideoDetail;

const VideoDetailWrap = styled.div<{ pathname: string }>`
  width: 100%;
  height: 100%;
  display: flex;

  @media all and (max-width: 1024px) {
    flex-wrap : ${(props) => (props.pathname !== "/" && 'wrap')};
  }
`;