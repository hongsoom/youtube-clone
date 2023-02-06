import styled from "styled-components";
import { MdRestore } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { GOOGLE_AUTH_URL } from "../shared/OAuth";

const History = () => {
    const hash = sessionStorage.getItem("hash")

    return (
        <HistoryWrap>
            <HistoryLogo />
            {hash ? <h1>아직 시청한 동영상이 없습니다.</h1> :
                <>
                    <h1>시청한 동영상을 확인하세요</h1>
                    <p>로그아웃하면 시청 기록을 볼 수 없습니다.</p>
                    <LoginBtn onClick={GOOGLE_AUTH_URL}><Profile />로그인</LoginBtn>
                </>}
        </HistoryWrap>
    )
}

const HistoryWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin: auto;
`

const HistoryLogo = styled(MdRestore)`
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

export default History;