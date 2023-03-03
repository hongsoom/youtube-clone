import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { RouteState } from '../types/types';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import Video from './Video';

const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    const location = useLocation() as RouteState;
    const pathname: string = location.pathname

    return (
        <>
            <NavBar setOpen={setOpen} open={open} />
            <VideoMain pathname={pathname}>
                {pathname.includes('watch') === false &&
                    <SideBar open={open} />}
                <Video />
            </VideoMain>
        </>
    );
}

export default Home;

const VideoMain = styled.div< { pathname: string }>`
  width: 100%;
  height: 100%;
  display: flex;

  @media all and (max-width: 1024px) {
    flex-wrap : ${(props) => (props.pathname.includes('watch') && 'wrap')};
  }
`;