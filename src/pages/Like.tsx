import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";

const Like = () => {
    return (
        <LikeWrap>
            <LikeLogo />
            <h1>좋아요 표시한 동영상이 없습니다.</h1>
        </LikeWrap>
    )
}

const LikeWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin: auto;
`

const LikeLogo = styled(AiOutlineLike)`
    font-size : 200px;
`

export default Like;