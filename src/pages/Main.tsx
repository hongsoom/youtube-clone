import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../contenxt/YoutubeAPIContext";
import Video from "../components/Video/Video";
import Loading from "../components/Video/Loding";

const Videos = () => {
  const { keyword } = useParams();

  const location = useLocation();
  const pathname = location.pathname

  const youtube = useYoutubeApi();

  const {
    isLoading,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword || undefined));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Video
            videos={videos}
            display={pathname}
          />
        </>
      )}
    </>
  );
}

export default Videos
