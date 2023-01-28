import styled from "styled-components";
import { MdOutlineSubscriptions } from "react-icons/md";

const Subscribe = () => {
    return (
        <SubscribeWrap>
            <SubLogo />
            <h1>새로운 동영상을 놓치지 마세요.</h1>
            <p>즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.</p>
        </SubscribeWrap>
    )
}

const SubscribeWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const SubLogo = styled(MdOutlineSubscriptions)`
    font-size : 200px;
`

export default Subscribe;