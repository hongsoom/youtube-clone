import styled from "styled-components";
import { MdOutlineVideoLibrary } from "react-icons/md";

const Storage = () => {
    return (
        <StorageWrap>
            <StorageLogo />
            <h1>좋아하는 동영상을 감상해 보세요.</h1>
            <p>저장하거나 좋아요 표시한 동영상을 보려면 로그인하세요.</p>
        </StorageWrap>
    )
}

const StorageWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const StorageLogo = styled(MdOutlineVideoLibrary)`
    font-size : 200px;
`

export default Storage;