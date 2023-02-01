import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../contenxt/YoutubeAPIContext";
import VideoCard from "../components/Video/VideoCard";
import Loading from "../components/Video/Loding";

const Videos = () => {
  const { keyword } = useParams();

  const youtube = useYoutubeApi();

  const {
    isLoading,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword || undefined));

  return (
    <VideoList>
      {isLoading &&
        <>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </>}
      {videos && (
        videos.map((video: any) => (
          <VideoCard video={video} />
        ))
      )}
    </VideoList>
  );
}

export default Videos

const VideoList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  overflow-x: hidden;
  margin-right: 30px;
  margin: 0 20px;
`;
