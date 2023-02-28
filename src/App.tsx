import React, { useState, memo } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router';
import styled from 'styled-components';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';
import { RouteState } from './types/types';
import NavBar from "./components/navBar/NavBar";
import Sidebar from './components/navBar/SideBar';

const queryclient = new QueryClient();

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation() as RouteState;
  const pathname: string = location.pathname

  return (
    <>
      <NavBar setOpen={setOpen} open={open} />
      <VideoMain pathname={pathname}>
        <QueryClientProvider client={queryclient} >
          <YoutubeAPIProvider>
            {pathname.includes('watch') === false &&
              <Sidebar open={open} />}
            <Outlet />
          </YoutubeAPIProvider>
        </QueryClientProvider>
      </VideoMain>
    </>
  );
}

export default memo(App);

const VideoMain = styled.div< { pathname: string }>`
  width: 100%;
  height: 100%;
  display: flex;

  @media all and (max-width: 1024px) {
    flex-wrap : ${(props) => (props.pathname.includes('watch') && 'wrap')};
  }
`;