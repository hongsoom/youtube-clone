import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { RouteState } from '../types/types';
import { useYoutubeApi } from '../contenxt/YoutubeAPIContext';
import VideoList from '../components/video/VideoList';

const Video = () => {
  const { keyword } = useParams();

  const location = useLocation() as RouteState;
  const pathname: string = location.pathname;

  const youtube = useYoutubeApi();

  const { data: videos } = useQuery(
    ['videos', keyword],
    () => youtube.search(keyword || undefined),
    {
      staleTime: 1000 * 60,
    }
  );

  return (
    <>
      <VideoList videos={videos} display={pathname} />
    </>
  );
};

export default Video;
