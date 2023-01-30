import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";

const PlayList = () => {
    return (
        <PlayListWrap>
            <PlayListLogo />
            <h1>아직 재생목록에 동영상이 없습니다.</h1>
        </PlayListWrap>
    )
}

const PlayListWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const PlayListLogo = styled(AiOutlineClockCircle)`
    font-size : 200px;
`

export default PlayList