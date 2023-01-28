import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { MdOutlineHome, MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdRestore } from "react-icons/md";

interface PropsType {
  pathname: string,
}

const Sidebar = () => {
  const location = useLocation() as PropsType;

  const pathname: string = location.pathname;

  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate(id)
  }

  return (
    <Container>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <MainMenuDiv className={"/" === pathname ? "active" : ""} onClick={() => onClick("/")}>
          <MdOutlineHome color={"/" === pathname ? "red" : ""} />
          <MenuSpan>홈</MenuSpan>
        </MainMenuDiv>

        <MainMenuDiv className={"/finder" === pathname ? "active" : ""} onClick={() => onClick("/finder")}>
          <MdOutlineExplore color={"/finder" === pathname ? "red" : ""} />
          <MenuSpan>탐색</MenuSpan>
        </MainMenuDiv>

        <MainMenuDiv className={"/subscribe" === pathname ? "active" : ""} onClick={() => onClick("/subscribe")}>
          <MdOutlineSubscriptions color={"/subscribe" === pathname ? "red" : ""} />
          <MenuSpan>구독</MenuSpan>
        </MainMenuDiv>

        <Line />

        <MainMenuDiv className={"/storage" === pathname ? "active" : ""} onClick={() => onClick("/storage")}>
          <MdOutlineVideoLibrary color={"/storage" === pathname ? "red" : ""} />
          <MenuSpan>보관함</MenuSpan>
        </MainMenuDiv>

        <MainMenuDiv className={"/history" === pathname ? "active" : ""} onClick={() => onClick("/history")}>
          <MdRestore color={"/history" === pathname ? "red" : ""} />
          <MenuSpan>시청기록</MenuSpan>
        </MainMenuDiv>

        <Line />

        <MainDiv>
          <MenuSpan>구독</MenuSpan>
          <p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p>
        </MainDiv>

        <Line />

      </IconContext.Provider>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  left: 0;
  float: left;
  width: 250px;
  height: 100%;
  text-align: left;
  overflow-y: scroll;

  .react-icons {
    margin-right: 20px;
    font-size: 30px;
    align-items: center;
    display: flex;
    float: left;
  }

  @media (max-width: 700px) {
    display: none;
  }
  
  @media (max-width: 1300px) {
    width: 100px;

    .react-icons {
      margin-right: 0;
    }
  }

  /*스크롤바*/
  &::-webkit-scrollbar {
    border: none;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background: darkgrey;
    border-radius: 8px;
  }
`;

const MainMenuDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }  

  @media (max-width: 1300px) {
    height: 90px;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const MainDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 100px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  p {
    font-size : 13px;
  }

  :hover {
    background-color: #f3f3f3;
  }  

  @media (max-width: 1300px) {
    display : none;
  }
`;

const MenuSpan = styled.span`
  font-size: 15px;

  @media (max-width: 1300px) {
    font-size: 10px;
  }
`;

const Line = styled.div`
  height: 1px;
  background: #dedede;
  margin-top: 14px;
  margin-bottom: 14px;

  @media (max-width: 1300px) {
    display: none;
  }
`;
