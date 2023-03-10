import React, { useRef, useEffect, memo, useState } from 'react';
import styled from 'styled-components';
import { formatAgo } from '../../shared/date';
import { VideoType } from '../../types/types';

const VideoExecution = ({ video }: VideoType) => {
  const videoTop = useRef(null);

  const { snippet, statistics, channelInfo } = video;
  const [idchek, setIdChek] = useState('');

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const idcheck = () => {
    if (typeof video.id === 'string') {
      setIdChek(video.id);
    } else {
      setIdChek(video.id.videoId);
    }
  };

  useEffect(() => {
    scrollTop();
  }, [idchek]);

  useEffect(() => {
    idcheck();
  }, [video]);

  return (
    <VideoDetailContent ref={videoTop}>
      <DetailWrap>
        <iframe
          title={snippet.title}
          width='100%'
          height='600px'
          src={`https://www.youtube.com/embed/${idchek}?autoplay=1&mute=1`}
          allowFullScreen
          aria-label={snippet.title}
        ></iframe>
      </DetailWrap>

      <TitlePartWrap>
        <DetailTitle>
          <h3>{snippet.title}</h3>
          <p>
            조회수{' '}
            {statistics.viewCount > 10000
              ? statistics.viewCount.slice(0, -4) + '만'
              : statistics.viewCount}
            회 &#183; {formatAgo(snippet.publishedAt, 'ko')}
          </p>
        </DetailTitle>
      </TitlePartWrap>

      <ChannelDescWrap>
        <ChannelImg>
          <img src={channelInfo.thumbnails.medium.url} alt='채널이미지' />
        </ChannelImg>
        <li>
          <ChannelName>{snippet.channelTitle}</ChannelName>
          <PublishedDate>
            구독자{' '}
            {statistics.subscriberCount > 10000
              ? statistics.subscriberCount.slice(0, -4) + '만'
              : statistics.subscriberCount}
            명
          </PublishedDate>
          <ChannelDescription>{snippet.description}</ChannelDescription>
        </li>
        <li>
          <SubscribeBtn aria-label='구독버튼'>Subscribe</SubscribeBtn>
        </li>
      </ChannelDescWrap>
    </VideoDetailContent>
  );
};
export default memo(VideoExecution);

const VideoDetailContent = styled.section`
  padding: 1.5em;
  width: 1500px;
`;

const DetailWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-style: none;
    border-radius: 5px;
  }
`;

const TitlePartWrap = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const DetailTitle = styled.li`
  width: 80%;
  list-style-type: none;

  h3 {
    font-size: 1.238rem;
    line-height: 1.3;
    font-weight: 500;
    color: rgb(44, 44, 44);
  }

  p {
    color: rgb(133, 133, 133);
    font-size: 15px;
    font-weight: 400;
    margin-top: 10px;
  }

  @media all and (max-width: 768px) {
    width: 100%;

    h3 {
      font-size: 1.098rem;
      line-height: 1.5;
    }
  }
`;

const ChannelDescWrap = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
  margin: 0;
  padding: 0;

  li {
    list-style-type : none;
    &:first-child {
      width: 48px;
    }

    &:nth-child(2) {
      width: 75%;
      margin: 0 1.5%;
    }

    &:last-child {
      flex-grow: 1;
    }
  }

  @media all and (max-width: 768px) {
    justify-content: flex-end;
    margin-top: 25px;
    flex-wrap: wrap;
    position: relative;

    li {
      &:first-child {
        width: 36px;
      }
  
      &:nth-child(2) {
        width: calc(100% - 51px);
        margin: 0 0 0 15px;
      }
  
      &:last-child {
        width: 130px;
        flex-grow: 0;
        position: absolute;
      }
    }
  }

  @media all and (max-width: 400px) {
    justify-content: flex-end;
    margin-top: 25px;
    flex-wrap: wrap;
    position: relative;

    li {  
      &:last-child {
        width: 100px;
        flex-grow: 0;
        position: absolute;
      }
    }
`;

const ChannelImg = styled.li`
  width: 100%;

  img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
  }

  @media all and (max-width: 768px) {
    img {
      width: 36px;
      height: 36px;
    }
  }
`;

const ChannelName = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: rgb(44, 44, 44);
  margin: 0;
`;

const PublishedDate = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(178, 178, 178, 1);
`;

const ChannelDescription = styled.p`
  display: block;
  margin-top: 10px;
  height: auto;
  font-size: 0.8rem;
  line-height: 1.6;
  color: rgb(44, 44, 44);
  overflow: hidden;
`;

const SubscribeBtn = styled.button`
  background-color: #ff0000;
  color: #fff;
  width: 100%;
  height: 40px;
  display: block;
  text-align: center;
  line-height: 40px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 1vw;
  border: 0;

  &:hover {
    background-color: #b40202;
  }

  @media all and (max-width: 768px) {
    font-size: 16px;
  }
`;
