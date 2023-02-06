import styled from "styled-components";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { GOOGLE_AUTH_URL } from "../shared/OAuth";

const Storage = () => {
    const hash = sessionStorage.getItem("hash")

    return (
        <StorageWrap>
            <StorageLogo />

            {hash ? <h1>아직 좋아하는 동영상이 없습니다.</h1> :
                <>
                    <h1>좋아하는 동영상을 감상해 보세요.</h1>
                    <p>저장하거나 좋아요 표시한 동영상을 보려면 로그인하세요.</p>
                    <LoginBtn onClick={GOOGLE_AUTH_URL}><Profile />로그인</LoginBtn>
                </>}
        </StorageWrap>
    )
}

const StorageWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin: auto;
`

const StorageLogo = styled(MdOutlineVideoLibrary)`
    font-size : 200px;
`

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 150px;
  height: 80px;
  border: solid #065fd4;
  border-width: 1px;
  background: #fff;
  color: #065fd4;
  cursor: pointer;
`;

const Profile = styled(VscAccount)`
    font-size: 25px;
`

export default Storage;