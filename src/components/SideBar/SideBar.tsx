import React, { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RouteState } from '../../types/types';
import { GOOGLE_AUTH_URL } from '../../shared/OAuth';
import { IconContext } from 'react-icons';
import GoogleButton from '../common/GoogleBtn';
import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdRestore,
} from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlinePlaySquare, AiOutlineClockCircle, AiOutlineLike } from 'react-icons/ai';

const Sidebar = ({ open }: any) => {
  const location = useLocation() as RouteState;

  const pathname: string = location.pathname;

  const hash = sessionStorage.getItem('hash');

  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate(id);
  };

  if (pathname.includes('watch')) {
    return null;
  }

  return (
    <Container open={open}>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <MainMenuDiv
          className={'/' === pathname ? 'active' : ''}
          onClick={() => onClick('/')}
          open={open}
        >
          <MdOutlineHome color={'/' === pathname ? 'red' : ''} />
          <MenuSpan open={open}>홈</MenuSpan>
        </MainMenuDiv>

        <MainMenuDiv
          className={'/finder' === pathname ? 'active' : ''}
          onClick={() => onClick('/finder')}
          open={open}
        >
          <MdOutlineExplore color={'/finder' === pathname ? 'red' : ''} />
          <MenuSpan open={open}>탐색</MenuSpan>
        </MainMenuDiv>

        <MainMenuDiv
          className={'/subscribe' === pathname ? 'active' : ''}
          onClick={() => onClick('/subscribe')}
          open={open}
        >
          <MdOutlineSubscriptions color={'/subscribe' === pathname ? 'red' : ''} />
          <MenuSpan open={open}>구독</MenuSpan>
        </MainMenuDiv>

        <Line open={open} />

        <MainMenuDiv
          className={'/storage' === pathname ? 'active' : ''}
          onClick={() => onClick('/storage')}
          open={open}
        >
          <MdOutlineVideoLibrary color={'/storage' === pathname ? 'red' : ''} />
          <MenuSpan open={open}>보관함</MenuSpan>
        </MainMenuDiv>

        <MainMenuDiv
          className={'/history' === pathname ? 'active' : ''}
          onClick={() => onClick('/history')}
          open={open}
        >
          <MdRestore color={'/history' === pathname ? 'red' : ''} />
          <MenuSpan open={open}>시청기록</MenuSpan>
        </MainMenuDiv>

        {hash ? (
          <>
            <MainMenuDiv
              className={'/channel' === pathname ? 'active' : ''}
              onClick={() => onClick('/channel')}
              open={open}
            >
              <AiOutlinePlaySquare color={'/channel' === pathname ? 'red' : ''} />
              <MenuSpan open={open}>내 동영상</MenuSpan>
            </MainMenuDiv>

            <MainMenuDiv
              className={'/playlist' === pathname ? 'active' : ''}
              onClick={() => onClick('/playlist')}
              open={open}
            >
              <AiOutlineClockCircle color={'/playlist' === pathname ? 'red' : ''} />
              <MenuSpan open={open}>나중에 볼 동영상</MenuSpan>
            </MainMenuDiv>

            <MainMenuDiv
              className={'/like' === pathname ? 'active' : ''}
              onClick={() => onClick('/like')}
              open={open}
            >
              <AiOutlineLike color={'/like' === pathname ? 'red' : ''} />
              <MenuSpan open={open}>좋아요 표시한 동영상</MenuSpan>
            </MainMenuDiv>
          </>
        ) : (
          ''
        )}

        <Line open={open} />
        <MainDiv open={open}>
          <MenuSpan open={open}>구독</MenuSpan>
          {hash ? (
            ''
          ) : (
            <>
              <p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p>
              {/*               <LoginBtn onClick={GOOGLE_AUTH_URL}>
                <Profile />
                로그인
              </LoginBtn> */}
              <GoogleButton />
            </>
          )}
        </MainDiv>
        <Line open={open} />
      </IconContext.Provider>
    </Container>
  );
};

export default memo(Sidebar);

const Container = styled.div<{ open: boolean }>`
  max-width: 260px;
  text-align: left;
  width: ${props => (props.open ? '100px' : '100%')};

  .react-icons {
    margin-right: ${props => (props.open ? '0' : '20px')};
    font-size: 30px;
    align-items: center;
    display: flex;
    float: left;
  }

  @media (max-width: 700px) {
    display: ${props => (props.open ? '0' : 'none')};
  }

  @media (max-width: 1300px) {
    width: 100px;

    .react-icons {
      margin-right: 0;
    }
  }

  &::-webkit-scrollbar {
    border: none;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background: darkgrey;
    border-radius: 8px;
  }
`;

const MainMenuDiv = styled.div<{ open: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${props => (props.open ? '90px' : '50px')};
  padding: ${props => props.open === false && '0px 20px 0px 20px'};
  flex-direction: ${props => props.open && 'column'};
  gap: ${props => props.open && '10px'};
  justify-content: ${props => props.open && 'center'};

  :hover {
    background-color: #f3f3f3;
  }

  @media (max-width: 1300px) {
    height: 90px;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }
`;

const MainDiv = styled.div<{ open: boolean }>`
  padding: 0px 20px 0px 20px;
  height: 150px;
  display: ${props => (props.open ? 'none' : 'flex')};
  flex-direction: column;
  cursor: pointer;

  p {
    font-size: 13px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const MenuSpan = styled.span<{ open: boolean }>`
  font-size: ${props => (props.open ? '10px' : '15px')};

  @media (max-width: 1300px) {
    font-size: 10px;
  }
`;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  border: solid #065fd4;
  border-width: 1px;
  background: #fff;
  color: #065fd4;
  cursor: pointer;
`;

const Profile = styled(VscAccount)`
  font-size: 25px;
`;

const Line = styled.div<{ open: boolean }>`
  height: 1px;
  background: #dedede;
  margin-top: 14px;
  margin-bottom: 14px;
  display: ${props => (props.open ? 'none' : '')};

  @media (max-width: 1300px) {
    display: none;
  }
`;
