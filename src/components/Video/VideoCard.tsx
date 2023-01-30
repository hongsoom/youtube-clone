import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../contenxt/YoutubeAPIContext";
import { formatAgo } from "../../shared/date";

const VideoCard = ({ video, key }: any) => {
    const { title, channelId, thumbnails, channelTitle, publishedAt } = video.snippet;
    const { viewCount } = video.statistics;

    const youtube = useYoutubeApi();

    const [hover, setHover] = useState<boolean>(false);

    const navigate = useNavigate();

    const {
        data: url,
    } = useQuery(['channels', channelId], () => youtube.channelImgURL(channelId));

    return (
        <VideoItem
            /*   onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)} */
            onClick={() => navigate(`videos/watch/:${key}`)}
        >
            {hover ? (
                <ReactPlayer
                    url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    muted
                    progressInterval={1000}
                    pip={true}
                    width={"100%"}
                    height={"auto"}
                    playing
                    style={{ marginBottom: "10px" }}
                />
            ) : (
                <Thumbnail src={thumbnails.medium.url} />
            )}

            <Info>
                <>
                    <Profile src={url} />
                </>
                <Title>{title}</Title>
                <Chanel>{channelTitle}</Chanel>
                <Views>조회수 {viewCount}회·</Views>
                <Date>{formatAgo(publishedAt, 'ko')}</Date>
            </Info>
        </VideoItem>
    );
}

export default VideoCard;

const VideoItem = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 10px 0 0;

    $:hover {
        box-shadow: 5px 7px 10px 0px #bebebe;
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    overflow:hidden;
    object-fit:cover;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 35px;
  float: left;
  margin: 0 10px 50px 10px;
`;

const Info = styled.div`
    margin-top: 10px;
`;

const Title = styled.div`
  overflow: hidden;
  white-space: normal;
  line-height: 1.2;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: black;
`;

const Chanel = styled.div`
    margin-top: 5px;
  color: darkslategrey;
  font-size: smaller;
`;

const Views = styled.span`
  color: darkslategrey;
  font-size: smaller;
  margin-right : 5px;
`;

const Date = styled.span`
  color: darkslategrey;
  font-size: smaller;
`;