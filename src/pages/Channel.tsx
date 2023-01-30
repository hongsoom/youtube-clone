import styled from "styled-components";
import { AiOutlinePlaySquare } from "react-icons/ai";

const Channel = () => {
    return (
        <ChannelWrap>
            <ChannelLogo />
            <h1>콘텐츠가 없습니다.</h1>
        </ChannelWrap>
    )
}

const ChannelWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const ChannelLogo = styled(AiOutlinePlaySquare)`
    font-size : 200px;
`

export default Channel;