import styled from "styled-components";
import { MdOutlineExplore } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { GOOGLE_AUTH_URL } from "../shared/OAuth";

const Finder = () => {
    const hash = sessionStorage.getItem("hash")

    return (
        <FinderWrap>
            <FinderLogo />
            {hash ? <h1>아직 새로운 동영상이 없습니다.</h1> :
                <>
                    <h1>새로운 동영상을 놓치지 마세요.</h1>
                    <p>즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.</p>
                    <LoginBtn onClick={GOOGLE_AUTH_URL}><Profile />로그인</LoginBtn>
                </>}
        </FinderWrap>
    )
}

const FinderWrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const FinderLogo = styled(MdOutlineExplore)`
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

export default Finder;