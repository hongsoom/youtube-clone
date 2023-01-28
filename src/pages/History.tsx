import styled from "styled-components";
import { MdRestore } from "react-icons/md";

const History = () => {
    return (
        <HistoryWrap>
            <HistoryLogo />
            <h1>시청한 동영상을 확인하세요</h1>
            <p>로그아웃하면 시청 기록을 볼 수 없습니다.</p>
        </HistoryWrap>
    )
}

const HistoryWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const HistoryLogo = styled(MdRestore)`
    font-size : 200px;
`

export default History;