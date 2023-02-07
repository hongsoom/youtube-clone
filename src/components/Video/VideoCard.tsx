import React, { memo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../../shared/date";

const VideoCard = memo(({ video, video: { snippet, statistics, channelInfo },
    display }: any) => {

    const displayType: boolean = display.includes('watch') ? true : false;
    const { title, channelTitle, publishedAt, thumbnails } = snippet
    const { viewCount } = statistics

    const navigate = useNavigate();

    return (
        <VideoItem displayType={displayType}
            onClick={() => navigate(`/videos/watch/${video.id}`, { state: video })}
        >
            <Thumbnail displayType={displayType}>
                <ThumbImg src={thumbnails.medium.url} alt="youtube_videos" displayType={displayType} />
            </Thumbnail>

            <InfoWrap displayType={displayType}>
                <Info displayType={displayType}>
                    <li>
                        <ChanelImg src={channelInfo.thumbnails.medium.url} alt="" displayType={displayType} />
                    </li>
                    <ChanelInfo>
                        <Title displayType={displayType}>{title}</Title>
                        <Chanel displayType={displayType}>{channelTitle}</Chanel>
                        <Views displayType={displayType}>조회수 {viewCount > 10000
                            ? viewCount.slice(0, -4) + "만"
                            : viewCount}</Views>
                        <Date displayType={displayType}>{formatAgo(publishedAt, 'ko')}</Date>
                    </ChanelInfo>
                </Info>
            </InfoWrap>
        </VideoItem >
    );
});

export default VideoCard;

const VideoItem = styled.li< { displayType: boolean }>`
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 10px 0 0;
    list-style-type: none;
    display: ${(props) => (props.displayType && 'flex')};
    list-style-type : none;

    $:hover {
        box-shadow: 5px 7px 10px 0px #bebebe;
    }

    
    @media all and (max-width: 1024px) {
      padding: 0;
    }
`;

const Thumbnail = styled.figure< { displayType: boolean }>`
    padding: 0;
    margin: 0;
    margin-left :  ${(props) => (props.displayType && '20px')};
    width : ${(props) => (props.displayType && '168px')};
    margin-right :  ${(props) => (props.displayType && '10px')};

    img {
        border-radius: 12px;
        transition: all 0.3s ease-in-out;
        width : ${(props) => (props.displayType ? '168px' : '100%')};
        height : ${(props) => (props.displayType && '94.5px')};
    }

    @media all and (max-width: 400px) {
        margin-left: ${(props) => (props.displayType && '0px')};
        width: ${(props) => (props.displayType && 'fit-content')};
        margin-right: ${(props) => (props.displayType && '10px')};
    }
`;

const ThumbImg = styled.img< { displayType: boolean }>`
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    width : ${(props) => (props.displayType ? '168px' : '100%')};
    height : ${(props) => (props.displayType && '94.5px')};
 

    @media all and (max-width: 400px) {
        width: ${(props) => (props.displayType && '100px')};
        height: ${(props) => (props.displayType && '76px')};
    }
`;


const InfoWrap = styled.div< { displayType: boolean }>`
    width : ${(props) => (props.displayType && '70%')};
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Info = styled.ul< { displayType: boolean }>`
    width: 100%;
    display: flex;
    margin-top: 5px;
    padding: 0;
    margin-top : ${(props) => (props.displayType && '0px')};
    list-style-type : none;
`;

const ChanelImg = styled.img< { displayType: boolean }>`
    display : ${(props) => (props.displayType && 'none')};
    width : ${(props) => (props.displayType === false && '36px')};
    height : ${(props) => (props.displayType === false && '36px')};
    margin-right : ${(props) => (props.displayType === false && '15px')};
    border-radius : ${(props) => (props.displayType === false && '100%')};
`;

const ChanelInfo = styled.li`
    @media all and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
  }
`;

const Title = styled.p< { displayType: boolean }>`
    font-weight: 500;
    color: rgb(44, 44, 44);
    margin : 0;
    padding : 2px;
    font-size: ${(props) => (props.displayType ? '0.8rem' : '1.05rem')};
    line-height: 1.4;

    @media all and (max-width: 768px) {
        width: 100%;
    }

    @media all and (max-width: 480px) {
        font-size: 0.95rem;
    }

    @media all and (max-width: 400px) {
        font-size: ${(props) => (props.displayType && '0.8rem')};
    }
       
`;

const Chanel = styled.p< { displayType: boolean }>`
    margin-top: 6px;
    color: rgb(133, 133, 133);
    margin : 0;
    padding : 2px;
    font-size: ${(props) => (props.displayType ? '0.8rem' : '0.9rem')};

    @media all and (max-width: 768px) {
        margin-right: 20px;
    }

    @media all and (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media all and (max-width: 400px) {
        font-size: ${(props) => (props.displayType && '0.73rem')};
    }
`;

const Views = styled.p< { displayType: boolean }>`
    margin-top: 5px;
    color: rgb(133, 133, 133);
    margin : 0;
    padding : 2px;
    font-size: ${(props) => (props.displayType ? '0.8rem' : '0.9rem')};

    @media all and (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media all and (max-width: 400px) {
        font-size: ${(props) => (props.displayType && '0.73rem')};
    }
`;

const Date = styled.p< { displayType: boolean }>`
    margin-top: 5px;
    color: rgb(133, 133, 133);
    margin : 0;
    padding : 2px;
    font-size: ${(props) => (props.displayType ? '0.8rem' : '0.9rem')};

    @media all and (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media all and (max-width: 400px) {
        font-size: ${(props) => (props.displayType && '0.73rem')};
    }
`;